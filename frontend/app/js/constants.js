var keyMirror = require('react/lib/keyMirror');

module.exports = {
    SECONDS_PER_BLOCK: 12,
    CHANGE_EVENT: "change",
    config: keyMirror({
        UPDATE_ETHEREUM_CLIENT_SUCCESS: null,
        UPDATE_ETHEREUM_CLIENT_FAILED: null,
        UPDATE_PERCENT_LOADED_SUCCESS: null,
        UPDATE_DEMO_MODE: null,
        UPDATE_CONFIG: null,
        UPDATE_BTC_SWAP_CLIENT: null
    }),
    network: keyMirror({
        UPDATE_READY: null,
        UPDATE_NETWORK: null,
        UPDATE_ETHEREUM_STATUS: null,
        UPDATE_BLOCK_CHAIN_AGE: null,
        UPDATE_IS_MONITORING_BLOCKS: null,
        ETHEREUM_STATUS_CONNECTED: null,
        ETHEREUM_STATUS_FAILED: null,
        ETHEREUM_STATUS_LOADING: null,
        LOAD_DEMO_DATA: null
    }),
    trade: keyMirror({
        LOAD_TRADE_IDS: null,
        LOAD_TRADE_IDS_FAIL: null,
        LOAD_TRADE: null,
        LOAD_TRADES: null,
        LOAD_TRADES_FAIL: null,
        LOAD_TRADES_SUCCESS: null,
        LOAD_TRADES_PROGRESS: null,
        LOAD_DEMO_DATA: null,
        UPDATE_TRADE: null,
        UPDATE_TRADES: null,
        UPDATE_TRADES_FAIL: null,
        UPDATE_TRADES_SUCCESS: null,
        UPDATE_TRADES_MESSAGE: null,
        CHECK_PENDING: null,
        ADD_TRADE: null,
        ADD_TRADE_SUCCESS: null,
        ADD_TRADE_FAIL: null,
        FILL_TRADE: null,
        FILL_TRADE_FAIL: null,
        FILL_TRADES: null,
        FILL_TRADES_FAIL: null,
        CANCEL_TRADE: null,
        CANCEL_TRADE_FAIL: null,
        ESTIMATE_GAS: null,
        ESTIMATE_GAS_ADD: null,
        ESTIMATE_GAS_FILL: null,
        HIGHLIGHT_FILLING: null,
        HIGHLIGHT_FILLING_FAIL: null,
        CLICK_FILL: null,
        SWITCH_MARKET: null,
        SWITCH_MARKET_FAIL: null,
        SWITCH_TYPE: null,
        SWITCH_TYPE_FAIL: null
    }),
    user: keyMirror({
        LOAD_USER: null,
        LOAD_USER_FAIL: null,
        LOAD_USER_SUCCESS: null,
        LOAD_ADDRESSES: null,
        LOAD_ADDRESSES_FAIL: null,
        LOAD_ADDRESSES_SUCCESS: null,
        LOAD_DEFAULT_ACCOUNT: null,
        UPDATE_USER: null,
        UPDATE_BALANCE: null,
        UPDATE_BALANCE_FAIL: null,
        UPDATE_BALANCE_SUB: null,
        UPDATE_BALANCE_SUB_FAIL: null,
        DEPOSIT: null,
        DEPOSIT_FAIL: null,
        WITHDRAW: null,
        WITHDRAW_FAIL: null,
        SEND_SUB: null,
        SEND_SUB_FAIL: null,
        SEND_ETHER: null,
        SEND_ETHER_FAIL: null,
        SWITCH_ADDRESS: null
    }),
    market: keyMirror({
        LOAD_MARKET: null,
        LOAD_MARKETS: null,
        LOAD_MARKETS_FAIL: null,
        LOAD_MARKETS_SUCCESS: null,
        LOAD_MARKETS_PROGRESS: null,
        LOAD_DEMO_DATA: null,
        UPDATE_LAST_PRICE: null,
        UPDATE_MARKET: null,
        UPDATE_MARKETS: null,
        UPDATE_MARKET_BALANCE: null,
        CHANGE_MARKET: null,
        RELOAD_PRICES: null,
        UPDATE_PRICES: null,
        UPDATE_PRICES_DATA: null,
        RELOAD_TRANSACTIONS: null,
        UPDATE_TRANSACTIONS: null,
        TOGGLE_FAVORITE: null
    }),
    ticket: keyMirror({
        LOAD_TICKETS: null,
        LOAD_TICKETS_PROGRESS: null,
        LOAD_TICKETS_SUCCESS: null,
        LOAD_TICKET_IDS: null,
        LOAD_TICKET_IDS_FAIL: null,
        LOAD_TICKET: null,
        LOAD_TICKET_FAIL: null,
        LOOKUP_TICKET: null,
        LOOKUP_TICKET_FAIL: null,
        LOAD_DEMO_DATA: null,
        UPDATE_TICKET: null,
        UPDATE_TICKETS: null,
        UPDATE_TICKETS_MESSAGE: null,
        UPDATE_TICKETS_SUCCESS: null,
        UPDATE_TICKETS_FAIL: null,
        UPDATE_WALLET: null,
        UPDATE_WALLET_FAIL: null,
        UPDATE_TX: null,
        UPDATE_TX_FAIL: null,
        UPDATE_BTC_HEAD: null,
        UPDATE_BTC_HEAD_FAIL: null,
        UPDATE_BTC_HEIGHT: null,
        UPDATE_BTC_HEIGHT_FAIL: null,
        UPDATE_BTC_HEADER: null,
        UPDATE_POW: null,
        PROPAGATE_TX: null,
        CREATE_TICKET: null,
        CREATE_TICKET_SUCCESS: null,
        CREATE_TICKET_FAIL: null,
        RESERVE_TICKET: null,
        RESERVE_TICKET_SUCCESS: null,
        RESERVE_TICKET_FAIL: null,
        CLAIM_TICKET: null,
        CLAIM_TICKET_SUCCESS: null,
        CLAIM_TICKET_FAIL: null,
        CANCEL_TICKET: null,
        CANCEL_TICKET_SUCCESS: null,
        CANCEL_TICKET_FAIL: null,
        ESTIMATE_GAS: null,
        ESTIMATE_GAS_ACTION: null,
        COMPUTE_POW_FAIL: null,
        VERIFY_POW: null,
        VERIFY_POW_FAIL: null,
        CLOSE_ALERT: null
    })
};
