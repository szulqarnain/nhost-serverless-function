import { Request, Response } from "express";
import fetch from "node-fetch";
import { clearToken } from "./_utils";

export default async (req: Request, res: Response) => {
  try {
    let token: any = await clearToken();

    if (!token) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve access token." });
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    const apiResponse = await fetch("endpoint", {
      method: "GET",
      headers: headers,
    });

    let apiData: any = await apiResponse.json();

    if (apiResponse.status === 200) {
      // add th_id with returing data
      // send response
      res.json(apiData);
    } else {
      //clear cachedToken
      clearToken(); // Clear cached token to fetch a new one next time

      res.json({ data: apiData });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(200).json({ error: `${error}` });
  }
};
