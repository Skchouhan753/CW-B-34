import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import "./QA.css";
export default function QA() {
  return (
    <>
      <Center>
        <Box width="50%" className="Question-container">
          <Center>
            <Heading>Q&A</Heading>
          </Center>
          <Accordion defaultIndex={[0]} allowMultiple p={20}>
            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton h={70} border={"none"}>
                  <Box as="span" flex="1" textAlign="left">
                    <h2>Is MyFitnessPal a free calorie tracker app ?</h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text p={2}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            {/* second colume here  */}

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton h={70} border={"none"}>
                  <Box as="span" flex="1" textAlign="left">
                    <h2>
                      How to track colories with a colories couter app like
                      MyFitnessPal
                    </h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text p={2}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            {/* Third colome  */}

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton h={70} border={"none"}>
                  <Box as="span" flex="1" textAlign="left">
                    <h2>What nutrition data can i track besides clories ?</h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text p={2}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton h={70} border={"none"}>
                  <Box as="span" flex="1" textAlign="left">
                    <h2>
                      {" "}
                      Does MyFitnessPal use a BMI Calculator or BMR Calculator
                      to set goals
                    </h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text p={2}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton h={70} border={"none"}>
                  <Box as="span" flex="1" textAlign="left">
                    <h2>
                      Can I track weight workouts , water or Intermittent
                      Fasting ?
                    </h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text p={2}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton h={70} border={"none"}>
                  <Box as="span" flex="1" textAlign="left">
                    <h2>Is MyFitnessPal a free calorie tracker app ?</h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text p={2}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
    </>
  );
}


