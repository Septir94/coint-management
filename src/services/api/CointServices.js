import { globalApis } from "../../configs/apis";
import { loadState } from "../../util/localStorage";

export const StoreServices = {
  getAllStoreByMechantId: async function (merchantId) {
    const requestBody = {
      id: merchantId,
    };
    const response = await globalApis.post(
      "/rest/store/get_byMerchantId",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            loadState() == null ? "" : loadState().auth.token
          }`,
        },
      }
    );
    return response.data;
  },
};
