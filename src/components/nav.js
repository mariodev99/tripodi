import MenuDrawer from "./Sheet";

export default function Nav(params) {
  return (
    <div className="flex justify-between items-center p-5">
      <div>logo</div>
      <MenuDrawer />
    </div>
  );
}
