FROM node:16
WORKDIR /usr/src/app
# docker-composeで指定したユーザーで動かす
ARG USER_NAME
USER ${USER_NAME}
RUN chown ${USER_NAME}:${USER_NAME} /usr/src/app
USER ${USER_NAME}

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]