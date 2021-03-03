PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

PROTOC_GEN_GRPC_BIN_PATH="./node_modules/.bin/grpc_tools_node_protoc"

TARGET_DIR="./app/server/proto"

OUT_DIR="./app/types/proto"

rm -rf ${OUT_DIR} && mkdir -p ${OUT_DIR}

grpc_tools_node_protoc \
    -I ${TARGET_DIR} \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \
    ${TARGET_DIR}/*.proto \
