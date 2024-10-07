import ButtonGroup from "@/components/ButtonGroup";

export default function AuthLayout({ children }) {
  return (
    <div>
      <ButtonGroup />
      {children}
    </div>
  );
}
