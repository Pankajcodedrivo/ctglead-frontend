import type { ReactNode } from "react";
interface TabPanelProps {
  isActive: boolean;
  children: ReactNode;
}
const TabPanel = ({ isActive, children }: TabPanelProps) => {
  if (!isActive) return null;
  return <div className="tab-panel">{children}</div>;
};

export default TabPanel;