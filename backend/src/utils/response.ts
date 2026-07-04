import { Response } from "express";

export function successResponse(
  res: Response,
  status: number,
  data: unknown,
  message = "Success",
) {
  return res.status(status).json({
    success: true,

    message,

    data,
  });
}

export function errorResponse(res: Response, status: number, message: string) {
  return res.status(status).json({
    success: false,

    message,
  });
}
