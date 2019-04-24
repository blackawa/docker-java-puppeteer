FROM openjdk:8u212-jre
WORKDIR /usr/src
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -qq --no-install-recommends \
    nodejs \
    yarn \
    && rm -rf /var/lib/apt/lists/*
ADD app.js /usr/src/app.js
ADD package.json /usr/src/package.json
ADD package-lock.json /usr/src/package-lock.json
RUN npm install