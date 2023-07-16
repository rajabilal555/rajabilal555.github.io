import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";
import { BsBoxArrowInUpRight } from "react-icons/bs";
type Props = {
  name: string;
  description: string;
  image?: string;
  icons: IconType[];
  sourceUrl?: string;
  tags: string[];
};

const Project = (props: Props) => {
  return (
    <Link
      href={props.sourceUrl ?? "#"}
      target={(props.sourceUrl !== undefined && "_blank") || ""}>
      <div className="snap-center">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          whileTap={{ scale: 0.99 }}
          // viewport={{ once: true }}
          style={{ backgroundImage: `url(${props.image})` }}
          className="flex flex-col items-center bg-center bg-no-repeat bg-cover border border-gray-700 rounded-md shadow bg-blend-multiply md:flex-row">
          <div className="relative w-full p-8 transition duration-300 rounded-md group sm:p-12 bg-black/60 hover:bg-black/90 filter ">
            {props.sourceUrl !== undefined && (
              <div className="absolute bottom-0 right-0 p-2 text-gray-400 transition duration-300 group-hover:text-white">
                <BsBoxArrowInUpRight size={28} />
              </div>
            )}
            <div className="flex flex-wrap-reverse justify-between w-full">
              <h2 className="my-3 text-2xl font-bold">{props.name}</h2>
              <div className="flex flex-row flex-wrap items-center justify-end flex-grow py-1 space-x-2">
                {props.icons.map((Icon) => (
                  <Icon key={Icon.toString()} size={32} />
                ))}
              </div>
            </div>
            <p className="whitespace-pre-line text-neutral-300">
              {props.description}
            </p>
            <div className="flex flex-wrap mt-3 w-max">
              {props.tags.map((tag, i) => (
                <span key={i} className="text-blue-300 bg-blue-900 pillbadge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Project;
