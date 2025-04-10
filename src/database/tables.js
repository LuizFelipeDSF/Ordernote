export async function initialiseDatabase() {
    try {
        await database.execAsync(`
          DROP TABLE IF EXISTS users;
          
          CREATE TABLE IIF NOT EXISTS users ();
          CREATE TABLE IIF NOT EXISTS customers ();
          CREATE TABLE IIF NOT EXISTS product_groups ();
          CREATE TABLE IIF NOT EXISTS products ();
          CREATE TABLE IIF NOT EXISTS product_variations ();
          CREATE TABLE IIF NOT EXISTS orders ();
          CREATE TABLE IIF NOT EXISTS sales ();
          CREATE TABLE IIF NOT EXISTS sale_items ();
        `);
    } catch (error) {
        
    }
}