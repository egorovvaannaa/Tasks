import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
      {user.address.street}
    </div>
  );
};
