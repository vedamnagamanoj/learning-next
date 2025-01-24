import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ status: "success", data: { cabin, bookedDates } });
  } catch (err) {
    return Response.json({
      status: "error",
      message: "Cabin not found",
    });
  }
}
// export async function POST() {}
