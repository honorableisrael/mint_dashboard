import { DashboardConstants } from "../constants/AdminConstants";
import Connector from "../Components/Services/services";
import {
  getAdminUtils,
  reloadPage,
  redirectTo,
} from "../Components/Services/helper";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { notify } from "../config";
import ConnectForms from "../Components/Services/ConnectForms";

export const dashboardActions = {
  getDashboardStats,
  getAllRoles,
  registerOrganisation,
  getAllOrganisation,
  registerClient,
  registerStaff,
  getAllDrugs,
  getAllAgentsCategories,
  createDrug,
  getOneOrganisation,
  getOneUser,
  editStaff,
  getAllManufacturers,
  getOneManufacturer,
  registerManufacturer,
  updateManufacturer,
  updateSuppliers,
  getAllSuppliers,
  registerSupplier,
  getOneSupplier,
  updateOrganisation,
  AdminUpdateOrganisation,
  GetOnePurchase,
  getAllInventory,
  updateProducts,
  getOneProduct,
  createInventory,
  updateInventory,
  getOneInventory,
  updateVendor,
  updateAgent,
  deleteOrganisation,
  getAllWarehouses,
  getDashboardProducts,
  getAllAgents,
  getAllCustomers,
  createProducts,
  registerCustomer,
  registerAgent,
  deleteProducts,
  getOneCustomer,
  updateCustomer,
  deleteCustomer,
  AdminGetOneOrganisation,
  deleteVendor,
  getOneAgent,
  deleteDriver,
  deleteAgent,
  getAllVendors,
  getOneVendor,
  addVendor,
  deletePurchase,
  registerPurchase,
  getAllSales,
  getDrivers,
  registerDriver,
  getOneDriver,
  updateDriver,
  getAwaitingApproval,
  rejectUser,
  approveUser,
  AdminRejectUser,
  getAllPurchases,
  deleteSales,
  updatePurchase,
  createSales,
  updateSales,
  AdminApproveUser,
  GetOneSale,
  getAnalytics,
  uploadFile,
  registerAdmin,
  approveSale,
  rejectSale,
  getSalesInvoice,
  getWalletDetails,
  createWallet,
  Transfer_Funds,
  getAllBanks,
  getAllFunds,
  AccountEnquiry,
  getAllLoanRequest,
  getLoanRequestSetting,
  getLoanBreakdown,
  getLoan,
  CreateLoanRequest,
  ApproveLoanRequest,
  RejectLoanRequest,
  RejectFundTransfer,
  ApproveFundTransfer,
};

function getDashboardStats() {
  const organization_id = getAdminUtils("admin_data")?.organisationId;
  //console.log(organization_id);
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/organisations/${organization_id}/clients`);
    dispatch({
      type: DashboardConstants.DASHBOARD_STATS_SUCCESS,
      payload: data,
    });
  };
}

function getAllPurchases(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_PURCHASE_SUCCESS,
      payload: data?.data,
    });
  };
}

function getAnalytics(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_ANALYTICS_SUCCESS,
      payload: data?.data?.data,
    });
  };
}

function getAllOrganisation() {
  return async (dispatch) => {
    const data = await Connector.get(`/get-organizations?per_page=${1}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_ORGANISATIONS_SUCCESS,
      payload: data?.data?.data,
    });
  };
}

function getAwaitingApproval(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_AWAITING_APPROVAL_SUCCESS,
      payload: data?.data,
    });
  };
}

function getAllAgents(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_AGENTS_SUCCESS,
      payload: data?.data,
    });
  };
}

function getAllCustomers(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    dispatch({
      type: DashboardConstants.DASHBOARD_CUSTOMERS_SUCCESS,
      payload: data,
    });
  };
}

function getAllVendors(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    dispatch({
      type: DashboardConstants.DASHBOARD_VENDORS_SUCCESS,
      payload: data?.data,
    });
  };
}

function getDrivers(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    dispatch({
      type: DashboardConstants.DASHBOARD_DRIVERS_SUCCESS,
      payload: data?.data,
    });
  };
}

function getAllBanks(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    dispatch({
      type: DashboardConstants.DASHBOARD_ALL_BANKS_SUCCESS,
      payload: data?.data,
    });
  };
}

function getAllFunds(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    dispatch({
      type: DashboardConstants.DASHBOARD_ALL_FUNDS,
      payload: data?.data?.data,
    });
  };
}

function getAllLoanRequest(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    dispatch({
      type: DashboardConstants.DASHBOARD_ALL_LOAN_REQUESTS,
      payload: data?.data,
    });
  };
}

function getLoanRequestSetting(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    dispatch({
      type: DashboardConstants.DASHBOARD_LOAN_REQUESTS_SETTINGS,
      payload: data?.data,
    });
  };
}

function getLoanBreakdown(formdata) {
  return async (dispatch) => {
    const data = await Connector.post(`/admin/loan-breakdown`, formdata);
    dispatch({
      type: DashboardConstants.DASHBOARD_LOAN_BREAKDOWN,
      payload: data?.data,
    });
  };
}
function getLoan(formData) {
  return async (dispatch) => {
    const data = await Connector.post(`/admin/loan-request`, formData);
    if (data) {
      notify("successfull");
      reloadPage();
    }
  };
}

function registerCustomer(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const data = await Connector.post(
        `/super_admin/create-customer`,
        formData
      );
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/customers");
      }
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/create-customer`, formData);
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/customers");
      }
    }
  };
}

function AccountEnquiry(formData) {
  return async (dispatch) => {
    const data = await Connector.post(`/admin/account-enquiry`, formData);
    dispatch({
      type: DashboardConstants.DASHBOARD_BANK_ACCOUNT_INQUIRY,
      payload: data?.data?.data,
    });
  };
}

//fund wallet
function Transfer_Funds(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/transfer-fund`, formData);
      if (data) {
        notify("successfull");
        reloadPage();
      }
    }
  };
}

function registerAdmin(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/create-admin`, formData);
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/manage/admin");
      }
    }
  };
}

function approveSale(id) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.get(`/admin/sales-order/approve/${id}`);
      if (data) {
        notify("successfully approved sale");
        reloadPage();
      }
    }
  };
}

function rejectSale(id) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.get(`/admin/sales-order/refute/${id}`);
      if (data) {
        notify("successfully rejected sale");
        reloadPage();
      }
    }
  };
}

function createSales(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const data = await Connector.post(
        `/super_admin/create-sales-order`,
        formData
      );
      if (data) {
        notify("successfully created sales");
        redirectTo("/admin/sales");
      }
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/create-sales-order`, formData);
      if (data) {
        notify("successfully created sale");
        redirectTo("/admin/sales");
      }
    }
  };
}

function createWallet(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/create-vfd-account`, formData);
      notify("Successfully created wallet");
      reloadPage();
      dispatch({
        type: DashboardConstants.DASHBOARD_CREATE_WALLET_SUCCESS,
        payload: data?.data,
      });
    }
  };
}

function registerPurchase(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const data = await Connector.post(
        `/super_admin/create-purchase`,
        formData
      );
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/purchase");
      }
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/create-purchase`, formData);
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/purchase");
      }
    }
  };
}

function addVendor(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const data = await Connector.post(`/super_admin/create-vendor`, formData);
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/vendors");
      }
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/create-vendor`, formData);
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/vendors");
      }
    }
  };
}

function registerDriver(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const data = await Connector.post(`/super_admin/create-driver`, formData);
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/drivers");
      }
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.post(`/admin/create-driver`, formData);
      if (data) {
        notify("successfully registered");
        redirectTo("/admin/drivers");
      }
    }
  };
}
function CreateLoanRequest(formData) {
  return async (dispatch) => {
    var data = await Connector.post(`/admin/loan-request`, formData);
    if (data) {
      notify("successfully created loan request");
      reloadPage();
    }
  };
}

function registerAgent(formData) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      var data = await Connector.post(
        `/super_admin/create-salesagent`,
        formData
      );
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      var data = await Connector.post(`/admin/create-salesagent`, formData);
    }
    if (data) {
      notify("successfully registered");
      redirectTo("/admin/agents");
    }
  };
}

function getAllSales(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(pathname);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_SALES_SUCCESS,
      payload: data?.data,
    });
  };
}

function getAllWarehouses(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/super_admin/all-warehouses/${id}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_WAREHOUSES_SUCCESS,
      payload: data,
    });
  };
}

function getDashboardProducts(path) {
  return async (dispatch) => {
    //console.log("here");
    const data = await Connector.get(`${path}`);
    dispatch({
      type: DashboardConstants.DASHBOARD_PRODUCTS_SUCCESS,
      payload: data?.data,
    });
  };
}

function getAllRoles() {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/roles`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_ROLES_SUCCESS,
      payload: data,
    });
  };
}
function getSalesInvoice(pathname) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`${pathname}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_INVOICE_SUCCESS,
      payload: data,
    });
  };
}

function getWalletDetails(pathname) {
  return async (dispatch) => {
    try {
      const data = await Connector.get(`${pathname}`);
      //console.log(data, "action error");
      dispatch({
        type: DashboardConstants.DASHBOARD_WALLET_SUCCESS,
        payload: data?.data?.data,
      });
    } catch (err) {
      const mockdata = "no wallet";

      dispatch({
        type: DashboardConstants.DASHBOARD_WALLET_SUCCESS,
        payload: mockdata,
      });
      //console.log(err.response, "wallet error");
    }
  };
}

function editStaff(formData, id) {
  try {
    return async (dispatch) => {
      const data = await Connector.put(`/users/${id}`, formData);
      //console.log(data);
      notify("Successfully updated");
      // reloadPage()
    };
  } catch (err) {
    notify("failed to process");
  }
}

function getOneOrganisation(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/super_admin/organization/${id}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_ORGANISATION,
      payload: data,
    });
  };
}
function AdminGetOneOrganisation(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/admin/organization`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_ORGANISATION,
      payload: data,
    });
  };
}

function GetOnePurchase(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(`${pathname}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_PURCHASE,
      payload: data,
    });
  };
}
function GetOneSale(pathname) {
  return async (dispatch) => {
    const data = await Connector.get(`${pathname}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_SALE,
      payload: data?.data,
    });
  };
}

function getOneSale(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/super_admin/organization/${id}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_ORGANISATION,
      payload: data,
    });
  };
}

function getOneAgent(id) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const {
        data: { data },
      } = await Connector.get(`/super_admin/salesagent/${id}`);
      //console.log(data);
      dispatch({
        type: DashboardConstants.DASHBOARD_GET_ONE_AGENT,
        payload: data,
      });
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const {
        data: { data },
      } = await Connector.get(`/admin/salesagent/${id}`);
      //console.log(data);
      dispatch({
        type: DashboardConstants.DASHBOARD_GET_ONE_AGENT,
        payload: data,
      });
    }
  };
}
function getOneVendor(id) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const {
        data: { data },
      } = await Connector.get(`/admin/vendor/${id}`);
      //console.log(data);
      dispatch({
        type: DashboardConstants.DASHBOARD_GET_ONE_VENDOR,
        payload: data,
      });
    }
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const {
        data: { data },
      } = await Connector.get(`/super_admin/vendor/${id}`);
      //console.log(data);
      dispatch({
        type: DashboardConstants.DASHBOARD_GET_ONE_VENDOR,
        payload: data,
      });
    }
  };
}

function getOneInventory(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/inventories/${id}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_INVENTORY,
      payload: data,
    });
  };
}

function getOneUser(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/users/${id}`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_USER,
      payload: data,
    });
  };
}

function getOneCustomer(id) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const data = await Connector.get(`/super_admin/customer/${id}`);
      //console.log(data);
      dispatch({
        type: DashboardConstants.DASHBOARD_GETONE_CUSTOMERS_SUCCESS,
        payload: data?.data?.data,
      });
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.get(`/admin/customer/${id}`);
      //console.log(data);
      dispatch({
        type: DashboardConstants.DASHBOARD_GETONE_CUSTOMERS_SUCCESS,
        payload: data?.data?.data,
      });
    }
  };
}

function getOneDriver(id) {
  return async (dispatch) => {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      const data = await Connector.get(`/super_admin/driver/${id}`);
      dispatch({
        type: DashboardConstants.DASHBOARD_GETONE_DRIVER_SUCCESS,
        payload: data?.data?.data,
      });
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      const data = await Connector.get(`/admin/driver/${id}`);
      dispatch({
        type: DashboardConstants.DASHBOARD_GETONE_DRIVER_SUCCESS,
        payload: data?.data?.data,
      });
    }
  };
}

function getAllDrugs() {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/drugs`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_DRUGS_SUCCESS,
      payload: data,
    });
  };
}

function getAllAgentsCategories() {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/drugscategories`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_DRUGS_CATEGORY,
      payload: data,
    });
  };
}

function getAllManufacturers(pathname) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(pathname);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_MANUFACTURERS,
      payload: data,
    });
  };
}

function getAllSuppliers() {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/suppliers`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_SUPLIERS,
      payload: data,
    });
  };
}

function getAllInventory() {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/inventories`);
    //console.log(data);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_INVENTORY,
      payload: data,
    });
  };
}

function getOneManufacturer(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/manufacturers/${id}`);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_MANUFACTURER,
      payload: data,
    });
  };
}

function getOneProduct(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/admin/product/${id}`);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_PRODUCT,
      payload: data,
    });
  };
}

function getOneSupplier(id) {
  return async (dispatch) => {
    const {
      data: { data },
    } = await Connector.get(`/suppliers/${id}`);
    dispatch({
      type: DashboardConstants.DASHBOARD_GET_ONE_SUPPLIER,
      payload: data,
    });
  };
}

function registerManufacturer(formData) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(`/manufacturers`, formData);
      //console.log(data);
      notify("Successfully created");
      reloadPage();
    };
  } catch (err) {
    notify("failed to process");
  }
}
function registerSupplier(formData) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(`/suppliers`, formData);
      //console.log(data);
      notify("Successfully created");
      reloadPage();
    };
  } catch (err) {
    notify("failed to process");
  }
}

function updateManufacturer(formData, id) {
  try {
    return async (dispatch) => {
      const data = await Connector.put(`/manufacturers/${id}`, formData);
      //console.log(data);
      notify("Successfully updated");
      reloadPage();
    };
  } catch (err) {
    notify("failed to update");
  }
}
function updateVendor(formData, id) {
  try {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      return async (dispatch) => {
        const data = await Connector.put(`/super_admin/vendor/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      return async (dispatch) => {
        const data = await Connector.put(`/admin/vendor/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
  } catch (err) {
    notify("failed to update");
  }
}
function updateSales(formData, id) {
  try {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      return async (dispatch) => {
        const data = await Connector.put(`/admin/sales-order/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      return async (dispatch) => {
        const data = await Connector.put(`/admin/sales-order/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
  } catch (err) {
    notify("failed to update");
  }
}

function updateAgent(formData, id) {
  try {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      return async (dispatch) => {
        const data = await Connector.put(
          `/super_admin/salesagent/${id}`,
          formData
        );
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      return async (dispatch) => {
        const data = await Connector.put(`/admin/salesagent/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
  } catch (err) {
    notify("failed to update");
  }
}

function updateCustomer(formData, id) {
  try {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      return async (dispatch) => {
        const data = await Connector.put(
          `/super_admin/customer/${id}`,
          formData
        );
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      return async (dispatch) => {
        const data = await Connector.put(`/admin/customer/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      };
    }
  } catch (err) {
    notify("failed to update");
  }
}

function updateDriver(formData, id) {
  try {
    return async (dispatch) => {
      if (getAdminUtils("admin_data")?.role_name == "super_admin") {
        const data = await Connector.put(`/super_admin/driver/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      }
      if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
        const data = await Connector.put(`/admin/driver/${id}`, formData);
        //console.log(data);
        notify("Successfully updated");
        reloadPage();
      }
    };
  } catch (err) {
    notify("failed to update");
  }
}

function deleteCustomer(id) {
  try {
    return async (dispatch) => {
      if (getAdminUtils("admin_data")?.role_name == "super_admin") {
        const data = await Connector.delete(`/super_admin/customer/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
      if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
        const data = await Connector.delete(`/admin/customer/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}
function deleteSales(id) {
  try {
    return async (dispatch) => {
      if (getAdminUtils("admin_data")?.role_name == "super_admin") {
        const data = await Connector.delete(`/super_admin/customer/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
      if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
        const data = await Connector.delete(`/admin/sales-order/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function deleteDriver(id) {
  try {
    return async (dispatch) => {
      if (getAdminUtils("admin_data")?.role_name == "super_admin") {
        const data = await Connector.delete(`/super_admin/driver/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
      if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
        const data = await Connector.delete(`/admin/driver/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function deletePurchase(id) {
  try {
    return async (dispatch) => {
      if (getAdminUtils("admin_data")?.role_name == "super_admin") {
        const data = await Connector.delete(`/super_admin/purchase/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
      if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
        const data = await Connector.delete(`/admin/purchase/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function deleteVendor(id) {
  try {
    return async (dispatch) => {
      if (getAdminUtils("admin_data")?.role_name == "super_admin") {
        const data = await Connector.delete(`/super_admin/vendor/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
      if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
        const data = await Connector.delete(`/admin/vendor/${id}`);
        notify("Successfully deleted");
        reloadPage();
      }
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function updateSuppliers(formData, id) {
  try {
    return async (dispatch) => {
      const data = await Connector.put(`/suppliers/${id}`, formData);
      //console.log(data);
      notify("Successfully updated");
      reloadPage();
    };
  } catch (err) {
    notify("failed to update");
  }
}
function updateInventory(formData, id) {
  try {
    return async (dispatch) => {
      const data = await Connector.put(`/inventories/${id}`, formData);
      //console.log(data);
      notify("Successfully updated");
      reloadPage();
    };
  } catch (err) {
    notify("failed to update");
  }
}

function createDrug(formData) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(`/drugs`, formData);
      //console.log(data);
      notify("Successfully created");
      reloadPage();
    };
  } catch (err) {
    notify("failed to process");
  }
}

function createInventory(formData) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(`/inventories`, formData);
      //console.log(data);
      notify("Successfully created");
      reloadPage();
    };
  } catch (err) {
    notify("failed to process");
  }
}

function createProducts(formData) {
  try {
    if (getAdminUtils("admin_data")?.role_name == "super_admin") {
      // const c_id = getAdminUtils("admin_data")?.role_name == "super_admin";
      return async (dispatch) => {
        const data = await ConnectForms.post(
          `/super_admin/create-product`,
          formData
        );
        //console.log(data);
        if (data) {
          notify("Successfully created");
          reloadPage();
        }
      };
    }
    if (getAdminUtils("admin_data")?.[0]?.role_name == "admin") {
      return async (dispatch) => {
        const data = await ConnectForms.post(`/admin/create-product`, formData);
        //console.log(data);
        if (data) {
          notify("Successfully created");
          redirectTo("/admin/products");
        }
      };
    }
  } catch (err) {
    notify("failed to process");
  }
}

function AdminUpdateOrganisation(formData, id) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(`/admin/update-organization`, formData);
      //console.log(data);
      notify("Successfully updated");
      reloadPage();
    };
  } catch (err) {
    notify("failed to process");
  }
}

function updateOrganisation(formData, id) {
  try {
    return async (dispatch) => {
      const data = await Connector.put(
        `/super_admin/organization/${id}`,
        formData
      );
      //console.log(data);
      notify("Successfully updated");
      reloadPage();
    };
  } catch (err) {
    notify("failed to process");
  }
}

function deleteOrganisation(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.delete(`/super_admin/organization/${id}`);
      notify("Successfully deleted");
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function registerOrganisation(formData) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(
        `/super_admin/create-organization`,
        formData
      );
      //console.log(data);
      if (data) {
        notify("successfully created organisation");
      }
      // reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function approveUser(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.get(`/super_admin/approve-user/${id}`);
      if (data) {
        notify("successfully approved");
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function AdminApproveUser(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.get(`/admin/approve-user/${id}`);
      if (data) {
        notify("successfully approved");
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function ApproveLoanRequest(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.get(`/super_admin/approve-loan-request/${id}`);
      if (data) {
        notify("successfully approved");
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function RejectFundTransfer(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.get(`/super_admin/decline-transfer-request/${id}`);
      //console.log(data);
      if (data) {
        notify("successfully rejected");
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function ApproveFundTransfer(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.get(`/super_admin/approve-transfer-request/${id}`);
      //console.log(data);
      if (data) {
        notify("successfully approved");
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function RejectLoanRequest(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.get(`/super_admin/refute-loan-request/${id}`);
      //console.log(data);
      if (data) {
        notify("successfully rejected");
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function AdminRejectUser(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.get(`/super_admin/refute-user/${id}`);
      //console.log(data);
      if (data) {
        notify("successfully rejected request");
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function rejectUser(id) {
  try {
    return async (dispatch) => {
      if (getAdminUtils("admin_data")?.role_name == "super_admin") {
        const data = await Connector.get(`/super_admin/refute-user/${id}`);
        //console.log(data);
        if (data) {
          notify("successfully rejected");
        }
      }
      if (getAdminUtils("admin_data")?.role_name == "admin") {
        const data = await Connector.get(`/admin/refute-user/${id}`);
        //console.log(data);
        if (data) {
          notify("successfully rejected");
        }
      }
      reloadPage();
    };
  } catch (err) {
    //console.log(err);
    notify("failed to process");
  }
}

function registerClient(formData) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(`/clients/register`, formData);
      //console.log(data);
      notify(data?.data?.data);
    };
  } catch (err) {
    notify("failed to process");
  }
}

function registerStaff(formData) {
  try {
    return async (dispatch) => {
      const data = await Connector.post(`/users/register`, formData);
      //console.log(data);
      notify(data?.data?.data);
    };
  } catch (err) {
    notify("failed to process");
  }
}

function updateProducts(formData, id) {
  try {
    return async (dispatch) => {
      const data = await ConnectForms.post(`/admin/product/${id}`, formData);
      if (data) {
        //console.log(data);
        notify("Successfully updated");
        // reloadPage();
      }
    };
  } catch (err) {
    notify("failed to process");
  }
}

function updatePurchase(formData, id) {
  try {
    return async (dispatch) => {
      const data = await ConnectForms.put(`/admin/purchase/${id}`, formData);
      if (data) {
        //console.log(data);
        notify("Successfully updated");
        // reloadPage();
      }
    };
  } catch (err) {
    notify("failed to process");
  }
}

function deleteProducts(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.delete(`/admin/product/${id}`);
      if (data) {
        //console.log(data);
        notify("Successfully deleted");
        reloadPage();
      }
    };
  } catch (err) {
    notify("failed to process");
  }
}

function deleteAgent(id) {
  try {
    return async (dispatch) => {
      const data = await Connector.delete(`/admin/salesagent/${id}`);
      if (data) {
        //console.log(data);
        notify("Successfully deleted");
        reloadPage();
      }
    };
  } catch (err) {
    notify("failed to process");
  }
}

function uploadFile(api, imageData) {
  try {
    return async (dispatch) => {
      const data = await ConnectForms.post(`${api}`, imageData);
      if (data) {
        //console.log(data);
        notify("Successfully uploaded");
        // reloadPage();
      }
    };
  } catch (err) {
    notify("failed to process");
  }
}
