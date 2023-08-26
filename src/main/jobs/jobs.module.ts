import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { PrismaService } from "src/infra/prisma.service";

@Module({
    providers: [JobsService, PrismaService],
})
export class JobsModules{}