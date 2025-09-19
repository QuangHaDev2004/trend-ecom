import { FaMagnifyingGlass } from "react-icons/fa6"

export const SearchBar = () => {
  return (
    <>
      <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-4 py-2 shadow-md">
        <FaMagnifyingGlass className="w-4 h-4 text-gray-500" />
        <input type="text"placeholder="Tìm kiếm..."  className="text-sm font-medium" />
      </div>
    </>
  )
}