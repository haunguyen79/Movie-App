import ImageComponent from "@components/Image";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";

const PeoplePage = () => {
  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <ImageComponent
          src="https://image.tmdb.org/t/p/w600_and_h900_face/nqeMTAdJFsXmsVxN5Mb6gEQ8cI3.jpg"
          width={600}
          height={900}
          className="mb-6"
        />

        <div>
          <p className="mb-6 text-lg font-bold">Personal Info</p>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Known For</p>
              <p>Acting</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>Male</p>
            </div>
            <div>
              <p className="font-bold">Place of birth</p>
              <p>NewYork - US</p>
            </div>
            <div>
              <p className="font-bold">Birthday</p>
              <p>Acting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2]">
        <p className="mb-6 text-2xl font-bold">Leo Messi</p>
        <div className="mb-6">
          <p className="mb-4 text-lg font-bold">Biography</p>
          <p>
            My favorite comedian is artist Xuan Bac, I was very impressed with
            his natural and charming performance. Uncle Xuan Bac is not very
            tall, has a balanced and healthy physique. With dark skin and
            angular face, he looks very masculine. Your personality is very
            rustic and simple. Off stage, it easy to meet him eating and hanging
            out at popular places
          </p>
        </div>
        <RelatedMediaList />
      </div>
    </div>
  );
};

export default PeoplePage;
