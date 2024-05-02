import { type ReactNode } from "react";

type ToDoListItemProps = { children: ReactNode; isComplete: boolean };

export function ToDoListItem({ children, isComplete }: ToDoListItemProps) {
  return (
    <label>
      <input type="checkbox" defaultChecked={isComplete} />
      {children}
    </label>
  );
}
