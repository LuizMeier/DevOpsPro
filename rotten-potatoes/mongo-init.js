db.auth('admin_user', 'admin_pwd')

db = db.getSiblingDB('admin')

db.createUser({
  user: 'rotten_user',
  pwd: 'rotten_pwd',
  roles: [
    {
      role: 'root',
      db: 'rotten_db',
    },
  ],
});
