-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "portfolio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DesignerOpportunity" (
    "designerOpportunity_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DesignerOpportunity_pkey" PRIMARY KEY ("designerOpportunity_id")
);

-- CreateTable
CREATE TABLE "DeveloperOpportunity" (
    "developerOpportunity_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DeveloperOpportunity_pkey" PRIMARY KEY ("developerOpportunity_id")
);

-- CreateTable
CREATE TABLE "DesignerOpportunityComment" (
    "comment_id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "designerOpportunity_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DesignerOpportunityComment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "DeveloperOpportunityComment" (
    "comment_id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "developerOpportunity_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DeveloperOpportunityComment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "DsaStuff" (
    "dsaStuff_id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DsaStuff_pkey" PRIMARY KEY ("dsaStuff_id")
);

-- CreateTable
CREATE TABLE "Flex" (
    "flex_id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Flex_pkey" PRIMARY KEY ("flex_id")
);

-- CreateTable
CREATE TABLE "JobOpportunity" (
    "jobOpportunity_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "applyLink" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "JobOpportunity_pkey" PRIMARY KEY ("jobOpportunity_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "DesignerOpportunity_userId_idx" ON "DesignerOpportunity"("userId");

-- CreateIndex
CREATE INDEX "DeveloperOpportunity_userId_idx" ON "DeveloperOpportunity"("userId");

-- CreateIndex
CREATE INDEX "DesignerOpportunityComment_userId_idx" ON "DesignerOpportunityComment"("userId");

-- CreateIndex
CREATE INDEX "DesignerOpportunityComment_designerOpportunity_id_idx" ON "DesignerOpportunityComment"("designerOpportunity_id");

-- CreateIndex
CREATE INDEX "DeveloperOpportunityComment_userId_idx" ON "DeveloperOpportunityComment"("userId");

-- CreateIndex
CREATE INDEX "DeveloperOpportunityComment_developerOpportunity_id_idx" ON "DeveloperOpportunityComment"("developerOpportunity_id");

-- CreateIndex
CREATE INDEX "DsaStuff_userId_idx" ON "DsaStuff"("userId");

-- CreateIndex
CREATE INDEX "Flex_userId_idx" ON "Flex"("userId");

-- CreateIndex
CREATE INDEX "JobOpportunity_userId_idx" ON "JobOpportunity"("userId");

-- AddForeignKey
ALTER TABLE "DesignerOpportunity" ADD CONSTRAINT "DesignerOpportunity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperOpportunity" ADD CONSTRAINT "DeveloperOpportunity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignerOpportunityComment" ADD CONSTRAINT "DesignerOpportunityComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DesignerOpportunityComment" ADD CONSTRAINT "DesignerOpportunityComment_designerOpportunity_id_fkey" FOREIGN KEY ("designerOpportunity_id") REFERENCES "DesignerOpportunity"("designerOpportunity_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperOpportunityComment" ADD CONSTRAINT "DeveloperOpportunityComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperOpportunityComment" ADD CONSTRAINT "DeveloperOpportunityComment_developerOpportunity_id_fkey" FOREIGN KEY ("developerOpportunity_id") REFERENCES "DeveloperOpportunity"("developerOpportunity_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DsaStuff" ADD CONSTRAINT "DsaStuff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flex" ADD CONSTRAINT "Flex_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobOpportunity" ADD CONSTRAINT "JobOpportunity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
