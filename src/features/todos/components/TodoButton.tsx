
type TodoButtonProps = React.PropsWithChildren & {
  id: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  style: string;
}

export default function TodoButton({ children, type, disabled, id, style }: TodoButtonProps) {
  return <button className={style} type={type} disabled={disabled} id={id}>{children}</button>
}
