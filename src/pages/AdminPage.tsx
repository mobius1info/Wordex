import { useState, useEffect } from 'react';
import { supabase, NewsItem } from '../lib/supabase';
import { Plus, Edit2, Trash2, Save, X, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadNews();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Ошибка входа: ' + error.message);
    } else {
      setIsAuthenticated(true);
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const loadNews = async () => {
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

  const handleAdd = async () => {
    if (!formData.title || !formData.content) {
      alert('Заполните все обязательные поля');
      return;
    }

    const { error } = await supabase.from('news').insert([formData]);

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
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Войти
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
              <button
                onClick={handleAdd}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Сохранить
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
