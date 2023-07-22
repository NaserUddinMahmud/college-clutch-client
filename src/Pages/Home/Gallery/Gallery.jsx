

const Gallery = () => {
    return (
        <div>
            <div className="mt-4 mb-2">
                <h2 className="text-center text-3xl font-semibold">Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-10">
                <img className="rounded-md" src="https://media.istockphoto.com/id/480952865/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=CrKZsKaSiyvn96yrlJ2QurlC9ZQ_1b5Y-hIfuOP7kdY=" alt="" />
                <img  className="rounded-md" src="https://media.istockphoto.com/id/483505143/photo/diverse-international-students-celebrating-graduation.jpg?s=612x612&w=0&k=20&c=rJ4IqVd1Sr1sBH5f28p_c3KQUkKQjhY6Btx4UAaZqBE=" alt="" />
               <img className="rounded-md"  src="https://media.istockphoto.com/id/482362583/photo/multi-ethnic-friends-excitedly-hold-diplomas-after-college-graduation.jpg?s=612x612&w=0&k=20&c=0u-Jm_50Rtdwl5n8vMZ-ROfxEg-BCSmg3ZKJJ_w5CWY=" alt="" />
               <img  className="rounded-md" src="https://media.istockphoto.com/id/936016782/photo/selfie-for-memories-six-with-cheerful-graduates-are-posing-for-selfie-shot-attractive-brunette.jpg?s=612x612&w=0&k=20&c=re5f2Z574tB1S7Cxx4bZthdp7veqvfDej27-2bd0WMg=" alt="" />
               <img  className="rounded-md" src="https://media.istockphoto.com/id/1398685250/photo/graduates-tossing-caps-into-the-air.jpg?s=612x612&w=0&k=20&c=gOYt4KvHNh6hxeoQGab8H9bLad2wK_fWf_6vqwopa60=" alt="" />
               <img  className="rounded-md" src="https://media.istockphoto.com/id/1534543130/photo/five-multiracial-high-school-graduates-shouting-to-camera.jpg?s=612x612&w=0&k=20&c=20K8zC5kKnPyAStTTD181X7oGG73HxJys1kRlodPzHc=" alt="" />
            </div>
        </div>
    );
};

export default Gallery;