/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BookingCreateRequest {
  vehicleId: string;
  /** @format date */
  bookingDate: string;
  /** @format date */
  journeyDate: string;
  boardingPoint: string;
  dropPoint: string;
  contactNumber: number;
  fare: number;
  bookingStatus: BookingCreateRequestBookingStatus;
  passengerDetails: Passenger[];
}

export interface BookingCreateResponse {
  vehicleId: string;
  /** @format date */
  bookingDate: string;
  /** @format date */
  journeyDate: string;
  boardingPoint: string;
  dropPoint: string;
  contactNumber: number;
  fare: number;
  bookingStatus: BookingCreateResponseBookingStatus;
  passengerDetails: Passenger[];
}

export interface Passenger {
  name: string;
  gender: string;
  age: number;
}

export enum BookingCreateRequestBookingStatus {
  BOOKED = "BOOKED",
  CANCELLED = "CANCELLED",
}

export enum BookingCreateResponseBookingStatus {
  BOOKED = "BOOKED",
  CANCELLED = "CANCELLED",
}
