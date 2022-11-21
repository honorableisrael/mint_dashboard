import { DashboardConstants } from "../constants/AdminConstants";

const initialState = {
  dashboardStats: {},
};

const dashboardStats = (state = initialState, action) => {
  switch (action.type) {
    case DashboardConstants.DASHBOARD_STATS_SUCCESS:
      return {
        ...state,
        dashboardStats: action.payload,
      };
    case DashboardConstants.ADD_ORGANISATION_SUCCESS:
      return {
        ...state,
        organization_registration: action.payload,
      };
    case DashboardConstants.DASHBOARD_ORGANISATIONS_SUCCESS:
      return {
        ...state,
        all_organisation: action.payload,
      };
    case DashboardConstants.DASHBOARD_WAREHOUSES_SUCCESS:
      return {
        ...state,
        warehouses: action.payload,
      };
    case DashboardConstants.DASHBOARD_USER_REG_SUCCESS:
      return {
        ...state,
        user_reg: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_DRUGS_SUCCESS:
      return {
        ...state,
        drugslist: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_DRUGS_CATEGORY:
      return {
        ...state,
        drugs_category_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_ORGANISATION:
      return {
        ...state,
        one_organisation: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_USER:
      return {
        ...state,
        one_user: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_MANUFACTURERS:
      return {
        ...state,
        manufacturer_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_SUPLIERS:
      return {
        ...state,
        supplier_list: action.payload,
      };

    case DashboardConstants.DASHBOARD_GET_ONE_MANUFACTURER:
      return {
        ...state,
        manufacturer: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_SUPPLIER:
      return {
        ...state,
        supplier: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_INVENTORY:
      return {
        ...state,
        inventory_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_PRODUCTS_SUCCESS:
      return {
        ...state,
        productlist: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_PRODUCT:
      return {
        ...state,
        oneproduct: action.payload,
      };
    case DashboardConstants.DASHBOARD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customer_list: action.payload,
      };

    case DashboardConstants.DASHBOARD_GETONE_CUSTOMERS_SUCCESS:
      return {
        ...state,
        onecustomer: action.payload,
      };
    case DashboardConstants.DASHBOARD_AGENTS_SUCCESS:
      return {
        ...state,
        agent_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_AGENT:
      return {
        ...state,
        one_agent: action.payload,
      };
    case DashboardConstants.DASHBOARD_VENDORS_SUCCESS:
      return {
        ...state,
        vendors_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_VENDOR:
      return {
        ...state,
        vendor: action.payload,
      };
    case DashboardConstants.DASHBOARD_SALES_SUCCESS:
      return {
        ...state,
        sales_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_DRIVERS_SUCCESS:
      return {
        ...state,
        drivers_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_GETONE_DRIVER_SUCCESS:
      return {
        ...state,
        onedriver: action.payload,
      };
    case DashboardConstants.DASHBOARD_AWAITING_APPROVAL_SUCCESS:
      return {
        ...state,
        awaiting_approval_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_PURCHASE_SUCCESS:
      return {
        ...state,
        purchase_list: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_ONE_PURCHASE:
      return {
        ...state,
        one_purchase: action.payload,
      };
    case DashboardConstants.DASHBOARD_GET_SALE:
      return {
        ...state,
        sale: action.payload,
      };
    case DashboardConstants.DASHBOARD_ANALYTICS_SUCCESS:
      return {
        ...state,
        analytics: action.payload,
      };
    case DashboardConstants.DASHBOARD_INVOICE_SUCCESS:
      return {
        ...state,
        invoice: action.payload,
      };

    case DashboardConstants.DASHBOARD_WALLET_SUCCESS:
      return {
        ...state,
        wallet: action.payload,
      };

    case DashboardConstants.DASHBOARD_CREATE_WALLET_SUCCESS:
      return {
        ...state,
        create_wallet: action.payload,
      };

    case DashboardConstants.DASHBOARD_ALL_BANKS_SUCCESS:
      return {
        ...state,
        all_banks: action.payload,
      };

    case DashboardConstants.DASHBOARD_ALL_LOAN_REQUESTS:
      return {
        ...state,
        all_loan_request: action.payload,
      };

    case DashboardConstants.DASHBOARD_BANK_ACCOUNT_INQUIRY:
      return {
        ...state,
        account_inquiry: action.payload,
      };

    case DashboardConstants.DASHBOARD_ALL_FUNDS:
      return {
        ...state,
        all_funds: action.payload,
      };
    case DashboardConstants.DASHBOARD_ALL_LOAN_REQUESTS:
      return {
        ...state,
        all_loan_request: action.payload,
      };
    case DashboardConstants.DASHBOARD_LOAN_REQUESTS_SETTINGS:
      return {
        ...state,
        loan_request_settings: action.payload,
      };
    case DashboardConstants.DASHBOARD_LOAN_BREAKDOWN:
      return {
        ...state,
        loan_breakdown: action.payload,
      };
    default:
      return state;
  }
};
export default dashboardStats;
