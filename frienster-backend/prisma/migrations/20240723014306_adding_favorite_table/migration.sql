-- CreateTable
CREATE TABLE "favorite" (
    "id" SERIAL NOT NULL,
    "created" TIMESTAMP(6),
    "liked_status" BOOLEAN,
    "number_shared" INTEGER,
    "event_id" INTEGER,
    "user_id" INTEGER,

    CONSTRAINT "favorite_pkey" PRIMARY KEY ("id")
);
