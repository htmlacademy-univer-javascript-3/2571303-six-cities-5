import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007BFF', fontSize: '18px' }}>
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
