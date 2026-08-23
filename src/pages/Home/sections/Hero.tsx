// src/pages/Home/sections/Hero.tsx

import React from "react";
import { motion } from "framer-motion";
import { Refrigerator } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { HERO } from "../../../data/homeContent";


export const Hero: React.FC = () => {
  return (
    <section
      className="
        bg-neutral-light
        dark:bg-neutral-dark
        py-20
        px-4
        md:px-8
        lg:px-16
        overflow-hidden
      "
    >
      <motion.div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          items-center
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        {/* Contenido textual */}
        <div>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-headings
              font-bold
              text-primary
              mb-6
            "
          >
            {HERO.title}
          </h1>


          <p
            className="
              text-lg
              text-neutral-gray
              dark:text-neutral-light
              mb-8
              max-w-xl
            "
          >
            {HERO.subtitle}
          </p>


          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mb-6
            "
          >
            <Button
              variant="primary"
              className="w-full sm:w-auto"
            >
              {HERO.ctaPrimary}
            </Button>


            <Button
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {HERO.ctaSecondary}
            </Button>

          </div>


          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {HERO.badges.map((badge) => (
              <Badge key={badge}>
                {badge}
              </Badge>
            ))}

          </div>

        </div>



        {/* Mockup aplicación */}
        <motion.div
          className="
            relative
            bg-primary/5
            dark:bg-primary/10
            rounded-3xl
            p-4
            flex
            items-center
            justify-center
          "
          whileHover={{ scale: 1.02 }}
        >

          <div
            className="
              w-64
              h-96
              bg-white
              dark:bg-neutral-dark
              rounded-2xl
              shadow-lg
              flex
              flex-col
              p-4
              space-y-2
            "
          >

            {/* Header del mockup */}

            <div
              className="
                flex
                justify-between
                items-center
                mb-2
              "
            >

              <span
                className="
                  font-headings
                  font-semibold
                  text-primary
                "
              >
                Inventario
              </span>


              <Refrigerator
                size={20}
                className="text-primary"
                aria-label="Inventario de refrigerador"
              />

            </div>



            {/* Filas simuladas */}

            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="
                  h-4
                  bg-primary/20
                  rounded
                  w-full
                  animate-pulse
                "
              />
            ))}


          </div>


        </motion.div>


      </motion.div>
    </section>
  );
};