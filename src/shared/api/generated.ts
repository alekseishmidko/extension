/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * Block-server
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type BlockListControllerGetListParams = {
  q?: string;
};

export type AddBlockItemDtoType =
  (typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
  KeyWord: "KeyWord",
  Website: "Website",
} as const;

export interface AddBlockItemDto {
  data: string;
  type: AddBlockItemDtoType;
}

export type BlockItemDtoType =
  (typeof BlockItemDtoType)[keyof typeof BlockItemDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
  KeyWord: "KeyWord",
  Website: "Website",
} as const;

export interface BlockItemDto {
  blockListId: number;
  createdAt: string;
  data: string;
  id: number;
  type: BlockItemDtoType;
}

export interface BlockListDto {
  id: number;
  items: BlockItemDto[];
  ownerId: number;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export interface AccountDto {
  id: number;
  isBlockingEnabled: boolean;
  ownerId: number;
}

export interface GetSessionInfoDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface SignUpBodyDto {
  email: string;
  password: string;
}

export interface HelloWorldDto {
  message: string;
}

export const appControllerGetHello = () => {
  return createInstance<HelloWorldDto>({ url: `/`, method: "GET" });
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
) => {
  return createInstance<void>({
    url: `/auth/sign-up`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: signUpBodyDto,
  });
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
) => {
  return createInstance<void>({
    url: `/auth/sign-in`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: signInBodyDto,
  });
};

export const authControllerSignOut = () => {
  return createInstance<void>({ url: `/auth/sign-out`, method: "POST" });
};

export const authControllerGetSessionInfo = () => {
  return createInstance<GetSessionInfoDto>({
    url: `/auth/session`,
    method: "GET",
  });
};

export const accountControllerGetAccount = () => {
  return createInstance<AccountDto>({ url: `/account`, method: "GET" });
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
) => {
  return createInstance<AccountDto>({
    url: `/account`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: patchAccountDto,
  });
};

export const blockListControllerGetList = (
  params?: BlockListControllerGetListParams,
) => {
  return createInstance<BlockListDto>({
    url: `/block-list`,
    method: "GET",
    params,
  });
};

export const blockListControllerAddBlockItem = (
  addBlockItemDto: BodyType<AddBlockItemDto>,
) => {
  return createInstance<BlockItemDto>({
    url: `/block-list/item`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: addBlockItemDto,
  });
};

export const blockListControllerRemoveBlockItem = (id: number) => {
  return createInstance<BlockItemDto>({
    url: `/block-list/item/${id}`,
    method: "DELETE",
  });
};

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BlockListControllerGetListResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerGetList>>
>;
export type BlockListControllerAddBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerAddBlockItem>>
>;
export type BlockListControllerRemoveBlockItemResult = NonNullable<
  Awaited<ReturnType<typeof blockListControllerRemoveBlockItem>>
>;
