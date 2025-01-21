import Type from "./Type";

export default function Actions() {
  return (
    <div className="actions flex justify-between align-middle w-full mt-5">
        <div className="type flex gap-2">
            {[ 'Movie', 'Series', 'Episode' ].map((item) => (
                <Type key={item} type={item} />
            ))}
        </div>
        <a href="#" className="text-center px-4 py-2 flex items-center gap-1 sm:text-sm lg:text-lg text-color hover:text-blue-700">
            See all  <i className="bx bx-chevron-right"></i>
        </a>
    </div>
  )
}
