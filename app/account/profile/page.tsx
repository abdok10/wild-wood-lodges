import UpdateProfileForm from "@components/UpdateProfileForm";
import SelectCountry from "@components/SelectCountry";
import { getGuest } from "@lib/data-service";
import { auth } from "@lib/auth";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return null; // Or some fallback UI if necessary
  }
  
  const guest = await getGuest(session.user.email);
  
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profil
      </h2> 

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
