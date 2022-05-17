const { DataTypes } = require("sequelize"); // sequelize 불러오기

module.exports = (sequelize) => {
  return sequelize.define(
    "GlobalStat", // 모델이름, 매개 변수 1
    // 매개 변수 2
    {
      // 속성 목록
      id: {
        autoIncrement: true, // 값 자동 증가
        type: DataTypes.INTEGER.UNSIGNED, // 부호 없는 정수 (양의 정수)
        allowNull: false, // 빈 값 허용 x
        primaryKey: true, // 기본키로 지정
      },
      // 국가 코드는 cc로 정의 (country code)
      cc: {
        type: DataTypes.CHAR(2),
        allowNull: false,
      },
      // 날짜
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      // 확진자 수
      confirmed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // 사망자 수
      death: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 완치자 수
      released: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 총 검사자 수
      tested: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 검사중 수
      testing: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // 결과 음성 수
      negative: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    // 매개 변수 3
    {
      sequelize, // 시퀄라이즈 인스턴스
      tableName: "GlobalStat", // 데이터베이스에서 테이블 이름
      timestamps: false, // 타임스탬프 자동 생성 x
      // 테이블 인덱스
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          fields: [{ name: "id" }],
        },
        {
          name: "ccWithDate",
          unique: true,
          fields: [{ name: "cc" }, { name: "date" }],
        },
      ],
    }
  );
};

