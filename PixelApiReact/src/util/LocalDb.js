import CryptoJS from 'crypto-js';

export class LocalDb {

    static Schema = "UserDb"
    static SchemaVersion = 1
    static DbId = "clientId"
    static DbUserTable = "myUser"
    static AutoIncrement = true
    static EncryptionKey = "TwiceDiosasLalaOranjheller"

    static async Insert(user) {

        let instance = await this.OpenDb();
        var transaction = instance.transaction(LocalDb.DbUserTable, 'readwrite');
        var dbRequest = transaction.objectStore(LocalDb.DbUserTable)


        // user.id = CryptoJS.AES.encrypt(user.id.toString(), LocalDb.EncryptionKey).toString()
        //user.email = CryptoJS.AES.encrypt(user.email, LocalDb.EncryptionKey).toString()
        //user.accountKey = CryptoJS.AES.encrypt(user.accountKey, LocalDb.EncryptionKey).toString()
        let response = dbRequest.add(user)

        response.onsuccess = function (event) {
            // console.log('New user has been inserted');
        };

        response.onerror = function (event) {
            console.error('Database error:', event.target.result);
        };
    }

    /*
    * Method getAll() return everything, but as I will save only 1 user data will work
    */
    static async FindUser() {

        let instance = await this.OpenDb();

        return new Promise(function (resolve, reject) {

            var transaction = instance.transaction(LocalDb.DbUserTable, 'readonly');
            var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
            let response = dbRequest.getAll()

            response.onsuccess = function (event) {

                let storedUser = event.target.result

                if (storedUser != "") {
                    //storedUser[0].id = Number(CryptoJS.AES.decrypt(storedUser[0].id, LocalDb.EncryptionKey).toString(CryptoJS.enc.Utf8))
                    //storedUser[0].email = CryptoJS.AES.decrypt(storedUser[0].email, LocalDb.EncryptionKey).toString(CryptoJS.enc.Utf8)
                    //storedUser[0].accountKey = CryptoJS.AES.decrypt(storedUser[0].accountKey, LocalDb.EncryptionKey).toString(CryptoJS.enc.Utf8)
                }
                resolve(storedUser);
            };

            response.onerror = function (event) {
                reject('Database error: ' + event.target.errorCode);
            };
        })
    }

    static async Find(id) {

        let instance = await this.OpenDb();
        var transaction = instance.transaction(LocalDb.DbUserTable, 'readonly');
        var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
        let response = dbRequest.get(id)

        response.onsuccess = function (event) {
            // console.log(event.target.result);
        };

        response.onerror = function (event) {
            console.error('Database error:', event.target.result);
        };
    }

    static async Delete() {

        let instance = await this.OpenDb();
        var transaction = instance.transaction(LocalDb.DbUserTable, 'readwrite');
        var dbRequest = transaction.objectStore(LocalDb.DbUserTable)
        let response = dbRequest.clear()

        response.onsuccess = function (event) {
            // console.log("Object has been deleted!");
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
            // console.log("Object has been updated!");
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

                // console.log('Database setup complete');
            }

            dbRequest.onsuccess = function (event) {
                resolve(event.target.result)
                // console.log('Database opened successfully');
            };

            dbRequest.onerror = function (event) {
                reject(event.target.errorCode);
                // console.error('Database error:', event.target.errorCode);
            };
        })
    }
}