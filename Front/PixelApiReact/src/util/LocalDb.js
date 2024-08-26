export class LocalDb {

    static Schema = "UserDb"
    static SchemaVersion = 1
    static DbId = "id"
    static DbUserTable = "myUser"
    static AutoIncrement = true

    static async Insert(user) {

        let instance = await this.OpenDb();
        var transaction = instance.transaction(LocalDb.DbUserTable, 'readwrite');
        var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
        let response = dbRequest.add(user)

        response.onsuccess = function (event) {
            console.log('New user has been inserted');
        };

        response.onerror = function (event) {
            console.error('Database error:', event.target.result);
        };
    }

    static async Find(id) {

        let instance = await this.OpenDb();
        var transaction = instance.transaction(LocalDb.DbUserTable, 'readonly');
        var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
        let response = dbRequest.get(id)

        response.onsuccess = function (event) {
            console.log(event.target.result);
        };

        response.onerror = function (event) {
            console.error('Database error:', event.target.result);
        };
    }

    /*
    * Method getAll() return everything, but as I will save only 1 user data
    * will work
    */
    static async FindUser() {

        let instance = await this.OpenDb();

        return new Promise(function (resolve, reject) {

            var transaction = instance.transaction(LocalDb.DbUserTable, 'readonly');
            var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
            let response = dbRequest.getAll()

            response.onsuccess = function (event) {
                resolve(event.target.result); // Resolve the promise with the retrieved data
            };

            response.onerror = function (event) {
                reject('Database error: ' + event.target.errorCode); // Reject the promise with an error
            };
        })
    }

    static async Delete(id) {

        let instance = await this.OpenDb();
        var transaction = instance.transaction(LocalDb.DbUserTable, 'readwrite');
        var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
        let response = dbRequest.delete(id)

        response.onsuccess = function (event) {
            console.log("Object has been deleted!");
        };

        response.onerror = function (event) {
            console.error('Database error:', event.target.result);
        };
    }

    static async Update(data) {

        let instance = await this.OpenDb();
        var transaction = instance.transaction(LocalDb.DbUserTable, 'readwrite');
        var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
        let response = dbRequest.put(data)

        response.onsuccess = function (event) {
            console.log("Object has been updated!");
        };

        response.onerror = function (event) {
            console.error('Database error:', event.target.result);
        };
    }

    static OpenDb() {
        return new Promise(function (resolve, reject) {

            const dbRequest = indexedDB.open(LocalDb.Schema, LocalDb.SchemaVersion);

            dbRequest.onupgradeneeded = function (event) {
                const db = event.target.result

                db.createObjectStore(LocalDb.DbUserTable, {
                    keyPath: LocalDb.DbId,
                    autoIncrement: LocalDb.AutoIncrement
                });

                console.log('Database setup complete');
            }

            dbRequest.onsuccess = function (event) {
                resolve(event.target.result)
                console.log('Database opened successfully');
            };

            dbRequest.onerror = function (event) {
                reject(event.target.errorCode);
                console.error('Database error:', event.target.errorCode);
            };
        })
    }
}