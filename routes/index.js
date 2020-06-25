import auth from './auth';
import users from './users';
import articles from './articles';
import categories from './categories';
import home from './home';
import files from './files';
import verify from './verify';
import bookmarks from './bookmarks';
import courses from './courses';
import botBooks from './bot-books';
import botGifts from './bot-gifts';
import botUsers from './bot-users';
import botOrders from './bot-orders';

export default (app) => {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/articles', articles);
  app.use('/api/categories', categories);
  app.use('/api/home', home);
  app.use('/api/files', files);
  app.use('/api/verify', verify);
  app.use('/api/bookmarks', bookmarks);
  app.use('/api/courses', courses);
  app.use('/api/telegram/books', botBooks);
  app.use('/api/telegram/gifts', botGifts);
  app.use('/api/telegram/users', botUsers);
  app.use('/api/telegram/orders', botOrders);
};
