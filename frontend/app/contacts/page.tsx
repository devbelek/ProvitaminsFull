import BreadCrumbs from "@/src/components/widgets/bread-crumbs";
import Image from "next/image";
import ContentLayout from "@/src/layout/content";
import ContactsMap from "@/src/components/widgets/contacts-map";
import ResponsibilityDenial from "@/src/components/widgets/responsibility-denial";
import { getContacts } from "@/src/api/contacts";

const location = [
  {
    href: "/",
    name: "Главная",
  },
  {
    href: "/contacts",
    name: "Контакты",
  },
];

async function Page() {
  const contacts = await getContacts();
  return (
    <div>
      <div className="container pt-5 hidden lg:block">
        <BreadCrumbs location={location} />
      </div>
      <ContentLayout>
        <div className="flex flex-col md:flex-row rounded-[10px] border border-stroke overflow-hidden">
          <div className="p-5 md:p-7 w-full md:max-w-[340px]">
            <div className="grid gap-3 md:gap-5">
              <h1 className="text-lg font-bold md:text-xl">Контакты</h1>
              <ul className="grid gap-2.5 md:gap-4">
                <li className="hover:text-main">
                  <a
                    href={`tel:${contacts.phone}`}
                    className="flex items-center gap-2"
                  >
                    <div className="relative w-9 aspect-square">
                      <Image
                        src="/images/global/contacts/phone.svg"
                        alt="social"
                        fill
                        sizes="100%"
                        priority
                      />
                    </div>
                    <p>{contacts.phone}</p>
                  </a>
                </li>
                <li className="hover:text-main">
                  <a
                    href={`tel:${contacts.phone2}`}
                    className="flex items-center gap-2"
                  >
                    <div className="relative w-9 aspect-square">
                      <Image
                        src="/images/global/contacts/phone.svg"
                        alt="social"
                        fill
                        sizes="100%"
                        priority
                      />
                    </div>
                    <p>{contacts.phone2}</p>
                  </a>
                </li>
                <li className="hover:text-main">
                  <a
                    href={`mailto:${contacts.email}`}
                    className="flex items-center gap-2"
                  >
                    <div className="relative w-9 aspect-square">
                      <Image
                        src="/images/global/contacts/mail.svg"
                        alt="social"
                        fill
                        sizes="100%"
                        priority
                      />
                    </div>
                    <p>{contacts.email}</p>
                  </a>
                </li>
                <li className="hover:text-main">
                  <a href={`#`} className="flex items-center gap-2">
                    <div className="relative w-[36px] min-w-[36px] max-w-[36px] aspect-square">
                      <Image
                        src="/images/global/contacts/location.svg"
                        alt="social"
                        fill
                        sizes="100%"
                        priority
                      />
                    </div>
                    <p>{contacts.address}</p>
                  </a>
                </li>
                {contacts.address_extra ? <li className="hover:text-main">
                  <a href={`#`} className="flex items-center gap-2">
                    <div className="relative w-[36px] min-w-[36px] max-w-[36px] aspect-square">
                      <Image
                        src="/images/global/contacts/location.svg"
                        alt="social"
                        fill
                        sizes="100%"
                        priority
                      />
                    </div>
                    <p>{contacts.address_extra}</p>
                  </a>
                </li> : ""}
                
                <li className="hover:text-main">
                  <a href={`#`} className="flex items-center gap-2">
                    <div className="relative w-9 aspect-square">
                      <Image
                        src="/images/global/contacts/time.svg"
                        alt="social"
                        fill
                        sizes="100%"
                        priority
                      />
                    </div>
                    <p>{contacts.work_time}</p>
                  </a>
                </li>
              </ul>
              <ul className="flex gap-2 items-center">
                {contacts.socials.map(({ id, icon, link }) => (
                  <li key={id}>
                    <a href={link} className="block relative w-8 aspect-square">
                      <Image src={icon} alt="social" fill sizes="100%" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactsMap />
        </div>
      </ContentLayout>
      <div>
        <ResponsibilityDenial />
      </div>
    </div>
  );
}

export default Page;
