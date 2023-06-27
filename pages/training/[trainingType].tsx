import { useRouter } from "next/router";
import Topbar from "../../components/Topbar";
import BottomNavbar from "../../components/BottomNavbar";
import Footerinfo from "../../components/Footerinfo";
import Copyright from "../../components/Copyright";

const TrainingPage = () => {
  const router = useRouter();
  const { trainingType } = router.query;

  return (
    <>
      <Topbar />
      {trainingType === "fridgeactraining" && (
        <div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">
              Fridge & AC Training Course in Nepal
            </h1>
            <p className="text-gray-600">
              Welcome to our Fridge & AC Training Course in Nepal! <br />
              Are you looking to gain comprehensive knowledge and hands-on
              skills in refrigerator and air conditioning systems? Look no
              further! Our training course is designed to provide you with the
              expertise and practical training needed to excel in the field.{" "}
              <br />
              Course Overview: Our Fridge & AC Training Course offers a
              comprehensive curriculum that covers the fundamentals of
              refrigeration and air conditioning systems. Whether you are a
              beginner with no prior experience or an experienced technician
              looking to enhance your skills, our course caters to all levels of
              proficiency.
            </p>
          </div>
          <div className="mb-8 px-12 mx-auto">
            <h3> <b> What sets us apart:</b></h3>
            <ul className="list-disc list-inside px-8">
              <li className="my-4">
                Experienced and Knowledgeable Instructors: Our instructors are
                industry professionals with extensive experience in the field of
                refrigeration and air conditioning. They bring their expertise
                and practical insights to the classroom, ensuring you receive
                top-quality training.
              </li>
              <li className="my-4">
                Hands-On Training: We believe in learning by doing. That's why
                our course emphasizes practical training where you will have the
                opportunity to work directly with refrigeration and air
                conditioning equipment. This hands-on experience will enhance
                your understanding and boost your confidence.
              </li>
              <li className="my-4">
                Comprehensive Curriculum: Our curriculum covers a wide range of
                topics, including refrigeration principles, AC system
                components, troubleshooting techniques, installation,
                maintenance, and more. You will acquire the skills needed to
                handle various types of systems and resolve common issues
                efficiently.
              </li>
              <li className="my-4">
                Industry-Standard Facilities: Our training facility is equipped
                with state-of-the-art tools and equipment, replicating
                real-world working environments. This allows you to practice on
                modern equipment commonly found in the industry, preparing you
                for the challenges of the field.
              </li>
              <li className="my-4">
                Certification and Career Support: Upon successful completion of
                the course, you will receive a recognized certification,
                validating your skills and knowledge. Additionally, we provide
                career support services, including job placement assistance and
                guidance to help you kick-start or advance your career in the
                refrigeration and air conditioning industry.
              </li>
            </ul>
          </div>
          <p className="text-gray-600 px-12 pb-8">
            Enroll in our Fridge & AC Training Course today and take a step
            towards a rewarding and promising career. Don't miss this
            opportunity to learn from industry experts and gain the skills that
            employers are seeking. <br />
            Contact us now to learn more or to register for the course. We look
            forward to helping you achieve your professional goals in the field
            of refrigeration and air conditioning.
          </p>
        </div>
      )}
      {trainingType === "wachingmachinetraining" && (
        <div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">
              Washing Machine Repair Training in Kathmandu
            </h1>
            <p className="text-gray-600">
              Course Overview: Our Washing Machine Repair Training in Kathmandu
              is designed to equip you with the skills and knowledge needed to
              excel in the field of washing machine repairs. Whether you are a
              beginner or an experienced technician looking to enhance your
              expertise, our comprehensive course covers everything you need to
              know.
            </p>
          </div>
          <div className="mb-8 px-12 mx-auto">
            <h3> <b> Course Content:</b></h3>
            <ul className="list-disc list-inside px-8">
              Introduction to Washing Machines
              <li className="my-4">Types of washing machines</li>
              <li className="my-4">Basic components and their functions</li>
              <li className="my-4">Understanding different washing machine technologies</li>
            </ul>
            <ul className="list-disc list-inside px-8">
              Common Washing Machine Issues
              <li className="my-4">Identifying common problems and their causes</li>
              <li className="my-4">Troubleshooting techniques</li>
              <li className="my-4">Repairing faulty components</li>
            </ul>
            <ul className="list-disc list-inside px-8">
              Maintenance and Servicing
              <li className="my-4">Proper cleaning and maintenance practices</li>
              <li className="my-4">Preventive measures to prolong machine lifespan</li>
              <li className="my-4">Regular inspection and servicing procedures</li>
            </ul>
            <ul className="list-disc list-inside px-8">
              Advanced Repair Techniques
              <li className="my-4">Dealing with complex issues and error codes</li>
              <li className="my-4">Repairing electronic control systems</li>
              <li className="my-4">Motor and drum assembly repairs</li>
            </ul>
            <ul className="list-disc list-inside px-8">
              Safety Measures and Best Practices
              <li className="my-4">Electrical safety precautions</li>
              <li className="my-4">Safe handling of washing machine parts</li>
              <li className="my-4">Worksite safety guidelines</li>
            </ul>
          </div>
        </div>
      )}
       
         {trainingType === "homeappliancestraining" && (
        <div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">
            Home Appliances Repair Training in Kathmandu
            </h1>
            <p className="text-gray-600">
            Course Overview: Our Home Appliances Repair Training in Kathmandu provides comprehensive training to help you become a skilled technician capable of repairing various household appliances. From refrigerators to microwave ovens, this course covers a wide range of appliances commonly found in homes.

            </p>
          </div>
          <div className="mb-8 px-12 mx-auto">
            <h3> <b> Course Content:</b></h3>
            <ul className="list-disc list-inside px-8">
            Introduction to Home Appliances
              <li className="my-4">Overview of different household appliances
</li>
              <li className="my-4">Understanding electrical and electronic components
</li>
              <li className="my-4">Safety precautions when working with appliances
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Refrigerator and Freezer Repairs
              <li className="my-4">Understanding refrigeration systems
</li>
              <li className="my-4">Troubleshooting and repairing common issues
</li>
              <li className="my-4">Compressor and condenser unit repairs
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Microwave Oven Repairs
              <li className="my-4">Understanding microwave technology
</li>
              <li className="my-4">Diagnosing and fixing heating and control problems</li>
              <li className="my-4">Replacing faulty components</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Oven and Stove Repairs
              <li className="my-4">Gas and electric oven operation principles
</li>
              <li className="my-4">Identifying and repairing heating and control issues
</li>
              <li className="my-4">Oven and stove maintenance and calibration
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Small Appliance Repairs
              <li className="my-4">Repairing coffee makers, toasters, blenders, and more
</li>
              <li className="my-4">Electrical circuit troubleshooting
</li>
              <li className="my-4">Component replacement and repair techniques</li>
            </ul>
          </div>
        </div>
      )}
         {trainingType === "ledtvtraining" && (
        <div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">
            LED TV Training in Kathmandu
            </h1>
            <p className="text-gray-600">
            Course Overview: Our LED TV Training in Kathmandu is designed to provide you with the knowledge and skills required to repair and troubleshoot LED televisions. This comprehensive course covers various LED TV technologies and equips you with the expertise needed to excel in this specialized field.
            </p>
          </div>
          <div className="mb-8 px-12 mx-auto">
            <h3> <b> Course Content:</b></h3>
            <ul className="list-disc list-inside px-8">
            Introduction to LED TVs
              <li className="my-4">Understanding LED TV components and functionalities
</li>
              <li className="my-4">Differentiating between LCD and LED technologies
</li>
              <li className="my-4">Overview of LED TV display panels
</li>
            </ul>
    
            <ul className="list-disc list-inside px-8">
            LED TV Troubleshooting
              <li className="my-4">Identifying common LED TV problems
</li>
              <li className="my-4">Diagnostic techniques and tools
</li>
              <li className="my-4">Repairing power supply and backlight issues
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Circuit Board Repair and Replacement
              <li className="my-4">Understanding circuit board layouts and components</li>
              <li className="my-4">Soldering and desoldering techniques
</li>
              <li className="my-4">Replacing faulty components and IC chips
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Firmware and Software Updates
              <li className="my-4">Updating firmware for improved performance
</li>
              <li className="my-4">Software troubleshooting and solutions
</li>
              <li className="my-4">USB and software flashing procedures
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Panel Repair and Replacement
              <li className="my-4">Handling broken or damaged LED TV panels
</li>
              <li className="my-4">Panel testing and repair techniques
</li>
              <li className="my-4">Panel replacement considerations and procedures</li>
            </ul>
          </div>
        </div>
      )}
         {trainingType === "plumbingtraining" && (
        <div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">
            Plumbing Training in Kathmandu
            </h1>
            <p className="text-gray-600">
            Course Overview: Our Plumbing Training in Kathmandu is designed to provide you with the skills and knowledge required to excel in the field of plumbing. This hands-on course covers various aspects of plumbing, from basic installations to advanced repair techniques.

            </p>
          </div>
          <div className="mb-8 px-12 mx-auto">
            <h3> <b> Course Content:</b></h3>
            <ul className="list-disc list-inside px-8">
            Introduction to Plumbing
              <li className="my-4">Overview of plumbing systems and components
</li>
              <li className="my-4">Understanding plumbing tools and equipment
</li>
              <li className="my-4">Safety precautions in plumbing work
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Pipe Installation and Repair
              <li className="my-4">Different types of pipes and fittings
</li>
              <li className="my-4">Pipe cutting, joining, and soldering techniques
</li>
              <li className="my-4">Repairing leaking and damaged pipes
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Fixture Installation and Maintenance
              <li className="my-4">Installing sinks, faucets, toilets, and showers
</li>
              <li className="my-4">Understanding fixture components and connections
</li>
              <li className="my-4">Maintenance and troubleshooting of fixtures
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Drainage Systems
              <li className="my-4">Understanding drainage and waste systems
</li>
              <li className="my-4">Clearing clogs and blockages
</li>
              <li className="my-4">Repairing and replacing drain pipes
</li>
            </ul>
            <ul className="list-disc list-inside px-8">
            Advanced Plumbing Techniques
              <li className="my-4">Water heater installation and repair
</li>
              <li className="my-4">Sewage and septic system maintenance
</li>
              <li className="my-4">Plumbing system design and layout considerations
</li>
            </ul>
          </div>
        </div>
      )}
      <BottomNavbar />
      <Footerinfo />
      <Copyright />
    </>
  );
};

export default TrainingPage;
