'use strict';

import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { pick } from 'lodash';
import * as StudentService from '../services/StudentService';


export { getOne, getAll, createOne, updateOne, deleteOne };

async function getOne(request: Request, response: Response) {
  const studentId = request.params.id;
  try {
    const record = await StudentService.getOne(studentId)
    return response.status(HttpStatus.OK).json(record || {});
  } catch (err: any) {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      errorCode: 'ERR_500_STUDENT_GET_ONE',
      message: err.message
    });
  }
}

async function getAll(request: Request, response: Response) {
  try {
    return response.status(HttpStatus.OK).json(
      await StudentService.getAll()
    );
  } catch (err: any) {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      errorCode: 'ERR_500_STUDENT_GET_ALL',
      message: err.message
    });
  }
}

async function createOne(request: Request, response: Response) {
  let studentData = pick(request.body, ['id', 'name', 'email', 'cpf']);
  try {
    return response.status(HttpStatus.CREATED).json(
      await StudentService.createOne(studentData)
    );
  } catch (err: any) {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      errorCode: 'ERR_500_STUDENT_CREATE_ONE',
      message: err.message
    });
  }
}

async function updateOne(request: Request, response: Response) {
  const studentId = request.params.id;
  const studentData = pick(request.body, ['name', 'email']);
  try {
    return response.status(HttpStatus.OK).json(
      await StudentService.updateOne(studentId, studentData)
    );
  } catch (err: any) {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      errorCode: 'ERR_500_STUDENT_UPDATE_ONE',
      message: err.message
    });
  }
}

async function deleteOne(request: Request, response: Response) {
  const studentId = request.params.id;
  const studentData = pick(request.body, ['name']);
  try {
    return response.status(HttpStatus.OK).json(
      await StudentService.deleteOne(studentId)
    );
  } catch (err: any) {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      errorCode: 'ERR_500_STUDENT_DELETE_ONE',
      message: err.message
    });
  }
}
