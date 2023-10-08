import { sendGetRequest } from "@/pages/api/requests";
// TS2305: Module '"@/pages/api/requests"' has no exported member 'sendGetRequest'

describe("sendGetRequest", () => {
    it("should return response data on success", async () => {
        const result = await sendGetRequest();
        console.log(result);
    });
});