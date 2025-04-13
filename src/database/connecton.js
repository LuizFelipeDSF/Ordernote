import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('app.db');

export const initDatabase = () => {
  db.transaction(tx => {
    // Users
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password_hash TEXT,
        role TEXT,
        status BOOLEAN DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Customers
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT,
        address_street TEXT,
        address_number TEXT,
        address_notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Product Groups
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS product_groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        icon TEXT
      );
    `);

    // Products
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        group_id INTEGER,
        name TEXT,
        description TEXT,
        image_url TEXT,
        is_active BOOLEAN DEFAULT 1,
        FOREIGN KEY (group_id) REFERENCES product_groups(id)
      );
    `);

    // Product Variations
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS product_variations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        name TEXT,
        price REAL,
        stock INTEGER,
        FOREIGN KEY (product_id) REFERENCES products(id)
      );
    `);

    // Orders
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        table_number TEXT,
        notes TEXT,
        status TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Sales
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        customer_id INTEGER,
        user_id INTEGER,
        total_amount REAL,
        payment_method TEXT,
        status TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);

    // Sale Items
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS sale_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sale_id INTEGER,
        product_id INTEGER,
        variation_id INTEGER,
        quantity INTEGER,
        unit_price REAL,
        subtotal REAL,
        FOREIGN KEY (sale_id) REFERENCES sales(id),
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (variation_id) REFERENCES product_variations(id)
      );
    `);
  }, (error) => {
    console.log('Erro ao criar tabelas:', error);
  }, () => {
    console.log('Tabelas criadas com sucesso');
  });
};

export default db;
