-- CreateEnum
CREATE TYPE "event_status" AS ENUM ('draft', 'live', 'started', 'ended', 'completed', 'canceled');

-- CreateTable
CREATE TABLE "attendee" (
    "id" SERIAL NOT NULL,
    "created" TIMESTAMP(6),
    "user_id" INTEGER,
    "ticket_class_id" VARCHAR(255),
    "quantity" INTEGER,
    "ticket_status" BOOLEAN,
    "event_id" VARCHAR(255),
    "order_id" VARCHAR(255),
    "invited_by" VARCHAR(255),

    CONSTRAINT "attendee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "parentid" INTEGER,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "currency" (
    "currency_id" SERIAL NOT NULL,
    "currency_name" TEXT,
    "code" TEXT,

    CONSTRAINT "currency_pkey" PRIMARY KEY ("currency_id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "summary" TEXT,
    "description" TEXT,
    "url" VARCHAR(255),
    "starttime" TIMESTAMPTZ(6),
    "endtime" TIMESTAMPTZ(6),
    "created" TIMESTAMP(6),
    "changed" TIMESTAMP(6),
    "published" TIMESTAMP(6),
    "currency" VARCHAR(3),
    "online_event" BOOLEAN,
    "hide_start_date" BOOLEAN,
    "hide_end_date" BOOLEAN,
    "capacity" INTEGER,
    "age_restriction" VARCHAR(50),
    "organization_id" INTEGER,
    "status" "event_status",
    "venue_id" INTEGER,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_category" (
    "event_category_id" SERIAL NOT NULL,
    "event_id" INTEGER,
    "category_id" INTEGER,

    CONSTRAINT "event_category_pkey" PRIMARY KEY ("event_category_id")
);

-- CreateTable
CREATE TABLE "orders" (
    "order_id" SERIAL NOT NULL,
    "created" TIMESTAMP(6),
    "name" TEXT,
    "email" TEXT,
    "event_id" VARCHAR(255),
    "promo_code" TEXT,
    "status" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "contact_email" VARCHAR(255),

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_class" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "cost" DOUBLE PRECISION,
    "currency_id" INTEGER,
    "donation" BOOLEAN,
    "free" BOOLEAN,
    "minimum_quantity" INTEGER,
    "maximum_quantity" INTEGER,
    "on_sale_status" TEXT,

    CONSTRAINT "ticket_class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venue" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "age_restriction" VARCHAR(50),
    "capacity" INTEGER,
    "latitude" DECIMAL(10,6),
    "longitude" DECIMAL(10,6),

    CONSTRAINT "venue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
