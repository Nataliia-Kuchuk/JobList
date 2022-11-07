import API from "../API";
import { IJobs } from "../types/types";

export const ServicesData= {
  getData: async (): Promise<IJobs[]> => {
    try {
      const { data } = await API.get("ZM1r0eic3XEy/data");
      return data;
    } catch (error) {
      throw error;
    }
  },
};
