import pg from "pg";
var conString = "postgres://usujcklb:Hk317YI4Cf4n-BFdi24DT33SNbiy_wQZ@rosie.db.elephantsql.com/usujcklb";
var client = new pg.Client(conString);
export function testElephant() {
    client.connect(function (err) {
        if (err) {
            return console.error("could not connect to postgres", err);
        }
        client.query('SELECT NOW() AS "theTime"', function (err, result) {
            if (err) {
                return console.error("error running query", err);
            }
            console.log(result.rows[0].theTime);
            // >> output: 2018-08-23T14:02:57.117Z
            client.end();
        });
    });
}
