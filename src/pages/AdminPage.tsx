import { useState, useEffect } from 'react';
import { supabase, NewsItem } from '../lib/supabase';
import { Plus, Edit2, Trash2, Save, X, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<Partial<NewsItem>>({
    date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
    title: '',
    content: '',
    category: 'Важное',
    language: 'ru',
    published: true,
  });

  const categories = ['Важное', 'Продукты', 'Технологии', 'Награды', 'Торговля', 'Бонусы', 'Обучение'];
  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'uk', name: 'Українська' },
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'zh', name: '中文' },
  ];

  const loadNews = async () => {
    if (!supabase) {
      console.error('Supabase не настроен');
      return;
    }

    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      alert('Ошибка загрузки новостей: ' + error.message);
    } else {
      setNews(data || []);
    }
  };

  const translateContent = async (text: string, sourceLang: string, targetLangs: string[]) => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const apiUrl = `${supabaseUrl}/functions/v1/translate-news`;

      console.log('Translation request:', { text: text.substring(0, 50), sourceLang, targetLangs });
      console.log('API URL:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, sourceLang, targetLangs }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Translation API error:', errorText);
        throw new Error(`Translation failed: ${errorText}`);
      }

      const data = await response.json();
      console.log('Translation response:', data);
      return data.translations;
    } catch (error) {
      console.error('Translation error:', error);
      alert('Ошибка перевода: ' + (error as Error).message);
      return null;
    }
  };

  const handleAdd = async () => {
    if (!formData.title || !formData.content) {
      alert('Заполните все обязательные поля');
      return;
    }

    setLoading(true);

    const selectedLangs = ['ru', 'uk', 'en', 'tr', 'zh'].filter(
      (lang) => formData[`publish_${lang}` as keyof NewsItem]
    );

    console.log('Selected languages:', selectedLangs);
    console.log('Source language:', formData.language);

    let titleTranslations = null;
    let contentTranslations = null;

    if (selectedLangs.length > 0) {
      titleTranslations = await translateContent(formData.title || '', formData.language || 'ru', selectedLangs);
      console.log('Title translations:', titleTranslations);

      contentTranslations = await translateContent(formData.content || '', formData.language || 'ru', selectedLangs);
      console.log('Content translations:', contentTranslations);

      if (!titleTranslations || !contentTranslations) {
        alert('Предупреждение: Перевод не удался. Новость будет сохранена без переводов.');
      }
    }

    const newsData = {
      ...formData,
      publish_ru: formData.publish_ru ?? true,
      publish_uk: formData.publish_uk ?? true,
      publish_en: formData.publish_en ?? true,
      publish_tr: formData.publish_tr ?? true,
      publish_zh: formData.publish_zh ?? true,
      title_ru: titleTranslations?.ru || formData.title,
      title_uk: titleTranslations?.uk || formData.title,
      title_en: titleTranslations?.en || formData.title,
      title_tr: titleTranslations?.tr || formData.title,
      title_zh: titleTranslations?.zh || formData.title,
      content_ru: contentTranslations?.ru || formData.content,
      content_uk: contentTranslations?.uk || formData.content,
      content_en: contentTranslations?.en || formData.content,
      content_tr: contentTranslations?.tr || formData.content,
      content_zh: contentTranslations?.zh || formData.content,
    };

    console.log('News data to be saved:', newsData);

    const { error } = await supabase.from('news').insert([newsData]);

    setLoading(false);

    if (error) {
      alert('Ошибка добавления: ' + error.message);
    } else {
      setShowAddForm(false);
      setFormData({
        date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
        title: '',
        content: '',
        category: 'Важное',
        language: 'ru',
        published: true,
        publish_ru: true,
        publish_uk: true,
        publish_en: true,
        publish_tr: true,
        publish_zh: true,
      });
      loadNews();
    }
  };

  const handleUpdate = async (id: string) => {
    const newsItem = news.find((n) => n.id === id);
    if (!newsItem) return;

    const { error } = await supabase
      .from('news')
      .update({
        date: newsItem.date,
        title: newsItem.title,
        content: newsItem.content,
        category: newsItem.category,
        language: newsItem.language,
        published: newsItem.published,
        publish_ru: newsItem.publish_ru ?? true,
        publish_uk: newsItem.publish_uk ?? true,
        publish_en: newsItem.publish_en ?? true,
        publish_tr: newsItem.publish_tr ?? true,
        publish_zh: newsItem.publish_zh ?? true,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) {
      alert('Ошибка обновления: ' + error.message);
    } else {
      setEditingId(null);
      loadNews();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Удалить эту новость?')) return;

    const { error } = await supabase.from('news').delete().eq('id', id);

    if (error) {
      alert('Ошибка удаления: ' + error.message);
    } else {
      loadNews();
    }
  };

  const updateNewsField = (id: string, field: keyof NewsItem, value: string | boolean) => {
    setNews(news.map((n) => (n.id === id ? { ...n, [field]: value } : n)));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('adminAuth', 'true');
        sessionStorage.setItem('adminToken', data.token);
        setUsername('');
        setPassword('');
      } else {
        alert('Неверный логин или пароль');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Ошибка входа. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    sessionStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  const handleTranslateExisting = async () => {
    if (!confirm('Перевести все существующие новости на все языки? Это может занять несколько минут.')) {
      return;
    }

    setLoading(true);
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const apiUrl = `${supabaseUrl}/functions/v1/translate-existing-news`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Translation failed: ${errorText}`);
      }

      const data = await response.json();
      alert(`Успешно! Переведено ${data.translatedCount} из ${data.totalItems} новостей.`);
      loadNews();
    } catch (error) {
      console.error('Translation error:', error);
      alert('Ошибка перевода: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadNews();
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Загрузка...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Админ панель</h1>
          <p className="text-gray-600 mb-8 text-center">Управление новостями компании</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Логин</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Введите логин"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Введите пароль"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Управление новостями</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Добавить новость
            </button>
            <button
              onClick={handleTranslateExisting}
              disabled={loading}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🌐 Перевести все
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Выйти
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Добавить новость</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Дата</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Заголовок</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Содержание</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Категория</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Язык</label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Статус</label>
                  <select
                    value={formData.published ? 'published' : 'draft'}
                    onChange={(e) => setFormData({ ...formData, published: e.target.value === 'published' })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="published">Опубликовано</option>
                    <option value="draft">Черновик</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Опубликовать на языках:</label>
                <div className="grid grid-cols-5 gap-3">
                  {languages.map((lang) => (
                    <label key={lang.code} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData[`publish_${lang.code}` as keyof NewsItem] as boolean ?? true}
                        onChange={(e) => setFormData({ ...formData, [`publish_${lang.code}`]: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{lang.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                onClick={handleAdd}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Перевод и сохранение...
                  </>
                ) : (
                  'Сохранить'
                )}
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
              {editingId === item.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Дата</label>
                    <input
                      type="text"
                      value={item.date}
                      onChange={(e) => updateNewsField(item.id!, 'date', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Заголовок</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateNewsField(item.id!, 'title', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Содержание</label>
                    <textarea
                      value={item.content}
                      onChange={(e) => updateNewsField(item.id!, 'content', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Категория</label>
                      <select
                        value={item.category}
                        onChange={(e) => updateNewsField(item.id!, 'category', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Язык</label>
                      <select
                        value={item.language}
                        onChange={(e) => updateNewsField(item.id!, 'language', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      >
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Статус</label>
                      <select
                        value={item.published ? 'published' : 'draft'}
                        onChange={(e) => updateNewsField(item.id!, 'published', e.target.value === 'published')}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300"
                      >
                        <option value="published">Опубликовано</option>
                        <option value="draft">Черновик</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(item.id!)}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                      <Save className="h-4 w-4" />
                      Сохранить
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                      <X className="h-4 w-4" />
                      Отмена
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {item.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {languages.find((l) => l.code === item.language)?.name}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            item.published
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {item.published ? 'Опубликовано' : 'Черновик'}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingId(item.id!)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id!)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Новостей пока нет</p>
          </div>
        )}
      </div>
    </div>
  );
}
