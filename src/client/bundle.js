import {registerTileComponent} from "@ombiel/cm-tile-sdk";
import Health from "./tiles/health/components/health";
import Payroll from "./tiles/payroll/components/payroll";
import Benefits from "./tiles/benefits/components/benefits";
import Classes from "./tiles/classes/components/classes";
import MyCourses from "./tiles/my-courses/components/my-courses";
import MyGrades from "./tiles/my-grades/components/my-grades";
import MyHR from "./tiles/my-hr/components/my-hr";
import MyStudio from "./tiles/my-studio/components/my-studio";
import Payments from "./tiles/payments/components/payments";
import Phone from "./tiles/phone/components/phone";
import Report from "./tiles/report/components/report";
import Procurement from "./tiles/procurement/components/procurement";

registerTileComponent(Health,"Health");

registerTileComponent(Payroll,"Payroll");

registerTileComponent(Benefits,"Benefits");

registerTileComponent(Classes,"Classes");

registerTileComponent(MyCourses,"MyCourses");

registerTileComponent(MyGrades,"MyGrades");

registerTileComponent(MyHR,"MyHR");

registerTileComponent(MyStudio,"MyStudio");

registerTileComponent(Payments,"Payments");

registerTileComponent(Phone,"Phone");

registerTileComponent(Report,"Report");

registerTileComponent(Procurement,"Procurement");
