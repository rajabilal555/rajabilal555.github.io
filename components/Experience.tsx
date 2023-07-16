import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Props = {
  period: string;
  company: string;
  position: string;
  description: string;
  icons: IconType[];
};

const Experience = (props: Props) => {
  return (
    <div className="snap-center">
      <motion.li
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        whileTap={{ scale: 0.99 }}
        className="py-3 hover:bg-gray-300/10">
        <div className="flex items-center pt-2 flex-start">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
          <p className="text-sm uppercase text-neutral-300">{props.period}</p>
        </div>
        <div className="mt-2 mb-6 ml-4">
          <h4 className="text-xl font-semibold">{props.company}</h4>
          <h5 className="mb-1.5  font-light text-neutral-400 ">
            {props.position}
          </h5>
          <div className="flex flex-row py-1 space-x-2">
            {props.icons.map((Icon) => (
              <Icon key={Icon.toString()} size={32} />
            ))}
          </div>
          <p className="mb-3 text-neutral-300 whitespace-pre-line">
            {props.description}
          </p>
        </div>
      </motion.li>
    </div>
  );
};

export default Experience;
