from rest_framework import serializers

from .models import Article, Earth, Location, Reconstruction, Video, Exhibit


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'


class EarthSerializer(serializers.ModelSerializer):

    def __init__(self, *args, **kwargs):
        many = kwargs.pop('many', True)
        super(EarthSerializer, self).__init__(many=many, *args, **kwargs)

    class Meta:
        model = Earth
        fields = '__all__'


# class EarthTexturesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = EarthTextures
#         fields = '__all__'
#

# class EarthSerializer(serializers.ModelSerializer):
#     textures = EarthTexturesSerializer(many=True, read_only=True)
#
#     uploaded_textures = serializers.ListField(
#         child=serializers.FileField(max_length=1000000, allow_empty_file=False, use_url=False),
#         write_only=True
#     )
#
#     class Meta:
#         model = Earth
#         fields = '__all__'

    # def create(self, validated_data):
    #     uploaded_data = validated_data.pop('uploaded_images')
    #     new_earth = Earth.objects.create(**validated_data)
    #     for uploaded_item in uploaded_data:
    #         new_product_image = EarthTextures.objects.create(earth=new_earth, images=uploaded_item)
    #     return new_earth


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'


class ReconstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reconstruction
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class ExhibitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibit
        fields = '__all__'

class ExhibitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibit
        fields = '__all__'

class PeriodArticlesSerializer(serializers.Serializer):
    period = serializers.CharField(required=True)
