import { FeatureTimeline } from '../../component/feature-step/feature-step';

function ProjectTimeline() {
  const FeatureTimelineList = [
    {
      id: 1,
      stepNumber: '01',
      title: 'Analysis',
      description:
        'Then with that thing in mind, follow these simple steps. Step One: Get yourself nice and relaxed and settled. Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind. Hypnotize yourself here.',
    },
    {
      id: 2,
      stepNumber: '02',
      title: 'Design',
      description:
        'That is your imagination doing that. You know the sound that your feet make when you walk across gravel don’t you? You can imagine it, but you are not hearing it in your ears, are you? Just imagine these things as best as you can.',
    },
    {
      id: 3,
      stepNumber: '03',
      title: 'Development',
      description:
        'Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make.',
    },
    {
      id: 4,
      stepNumber: '04',
      title: 'Testing',
      description:
        'Engage with the idea of really being there. Step Three: Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think.',
    },
    {
      id: 5,
      stepNumber: '05',
      title: 'Go-Live',
      description:
        'Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future.',
    },
  ];

  return (
    <>
      <div className="feature-step-wrapper">
        {FeatureTimelineList.map((val, ind) => {
          if (ind < 5) {
            return (
              <FeatureTimeline
                key={ind}
                extraClass=""
                featureImg={val.featureImg}
                stepNumber={val.stepNumber}
                title={val.title}
                description={val.description}
              />
            );
          }
          // Default return statement
          return null;
        })}
      </div>
    </>
  );
}

export default ProjectTimeline;
