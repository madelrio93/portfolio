import { query } from "@lib/query";

export const getGlobalInfo = async () => await query("about");
