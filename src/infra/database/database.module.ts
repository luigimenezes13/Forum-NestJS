import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository'
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments-repository'

@Module({
    providers: [PrismaService, PrismaQuestionsRepository, PrismaQuestionsRepository, PrismaQuestionAttachmentsRepository, PrismaAnswersRepository, PrismaAnswerCommentsRepository, PrismaAnswerCommentsRepository],
    exports: [PrismaService]
})
    
export class DatabaseModule {}
