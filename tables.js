const log = require('./logger');
const db = require('./db');

// create tables
db.getConnection()
    .then(conn => {
        conn.query(`CREATE TABLE IF NOT EXISTS guilds (
            id VARCHAR(20) PRIMARY KEY,
            module_nolinks BOOLEAN DEFAULT 0,
            channel_logs VARCHAR(20) DEFAULT NULL
        )`)

        conn.query(`CREATE TABLE IF NOT EXISTS bot (
            id VARCHAR(20) PRIMARY KEY,
            msg_count INT DEFAULT 0,
            deleted_msg_count INT DEFAULT 0
        )`)

        conn.query(`CREATE TABLE IF NOT EXISTS stats (
            id VARCHAR(20) PRIMARY KEY,
            msg_count INT DEFAULT 0,
            deleted_msg_count INT DEFAULT 0
        )`)

        conn.query(`CREATE TABLE IF NOT EXISTS default_config (
            id VARCHAR(20) PRIMARY KEY,
            links JSON DEFAULT NULL
        )`)
    })