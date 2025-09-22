import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";

export const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: React.Dispatch<
    React.SetStateAction<ShippingFormInputs | null>
  >;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold">Thông tin giao hàng</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleShippingForm)}
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-500"
            >
              Họ tên
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ví dụ: Lê Văn A"
              className="border-b border-gray-200 py-2 text-sm font-medium"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs font-medium text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ví dụ: levana@gmail.com"
              className="border-b border-gray-200 py-2 text-sm font-medium"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-gray-500"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Ví dụ: 0373246357"
              className="border-b border-gray-200 py-2 text-sm font-medium"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs font-medium text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="address"
              className="text-sm font-semibold text-gray-500"
            >
              Địa chỉ
            </label>
            <input
              type="text"
              id="address"
              placeholder="Ví dụ: Hà Nội"
              className="border-b border-gray-200 py-2 text-sm font-medium"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-xs font-medium text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-gray-800 p-3 text-white transition-all duration-300 hover:bg-gray-900"
          >
            <p className="text-sm font-semibold">Tiếp tục</p>
            <FaArrowRightLong />
          </button>
        </form>
      </div>
    </>
  );
};
